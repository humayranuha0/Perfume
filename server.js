const dotenv=require("dotenv");
dotenv.config();


const mongoose= require("mongoose");

const express = require('express');
const cors = require('cors');
const path = require('path');


const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected!");

  })
  .catch(err => console.log("Error here:", err));


const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname+'/dist'));

const perfumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, default: '50ml' },
  rating: { type: Number, default: 5.0 },
  notes: { type: String },
  image: { type: String },
  badge: { type: String, default: 'NEW' }
}, { timestamps: true });

const Perfume = mongoose.model("Perfume",perfumeSchema);
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});
const Contact= mongoose.model("Contact",contactSchema);
const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  userEmail: { type: String, required: true }, 
  phone: { type: String },               
  address: { type: String },                  
  items: { type: Array, required: true },     
  itemsCount: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  deliveryMessage: { type: String, default: '' },
  date: { type: Date, default: Date.now }
});
const Order = mongoose.model('Order', orderSchema);
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'customer' },
  location: { type: String, required: function() { return this.role === 'customer'; } }, 
  phone: { type: String }
});
const User = mongoose.model('User', userSchema);

app.post("/api/perfumes/add",async(req,res)=>{
try {
  const newPerfume= new Perfume(req.body);
  const savedPerfume = await newPerfume.save();
  res.status(201).json(savedPerfume);


}
catch(err){
  res.status(500).json({error:err.message});
}
});
app.delete("/api/perfumes/delete/:id", async (req, res) => {
  try {
    await Perfume.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Perfume deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
app.get("/api/perfumes",async(req,res)=>{
  try{
    const perfumes=await Perfume.find().sort({createdAt: -1})
  res.json(perfumes);
}
catch(err){
  res.status(500).json({error:err.message})
}
});

app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 });
    console.log("Found orders in DB:", orders);
    res.status(200).json(orders);
     
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ success: true, data: newOrder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ success: true, message: 'Message saved successfully to MongoDB!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


app.get('/api/contact', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ date: -1 }); 
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.delete('/api/contact/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Message deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, role, location, phone } = req.body;
    
 
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email!" });
    }


    const newUser = new User({ name, email, password, role, location, phone });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
});
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      return res.status(200).json({
        message: "Admin login successful",
        user: {
          name: "Admin",
          email: process.env.ADMIN_EMAIL,
          role: "admin"
        }
      });
    }


    const user = await User.findOne({ email });
    if (!user || user.password !== password) { 
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        role: "customer",
        location: user.location,
        phone: user.phone
      }
    });

  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
});
app.put('/api/orders/:id', async (req, res) => {
  try {
    const { status, deliveryMessage } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (status) order.status = status;
    if (deliveryMessage) order.deliveryMessage = deliveryMessage;

    await order.save();
    res.json({ success: true, message: 'Order approved successfully', order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(3000,()=>{
     console.log('Glowdent Backend Server is Running!');
})
