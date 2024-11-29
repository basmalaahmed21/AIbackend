const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const Patient = require('./models/patient');
const connectDB =require('./config/DB');
const Measurment = require('./models/measurments');
const RobotStatus = require('./models/robotStatus');
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/user');
const authMiddleware = require('./middleware/authMiddleware');
const adminRoutes = require('./routes/admin');


require('dotenv').config();


app.use(express.json());
connectDB(); 

app.post('/users', (req, res) => {
  const newUser = new User(req.body);
  newUser.save()
      .then(user => res.status(201).json(user))
      .catch(err => res.status(400).json({ error: err.message }));
});

app.post('/patient', (req, res) => {
  const newPatient = new Patient(req.body);
  newPatient.save()
  .then(patient => res.status(201).json(patient))
  .catch(err => res.status(400).json({ error: err.message }));
})

app.post('/measurment', (req, res) => {
  const newMeasurment = new Measurment(req.body);
  newMeasurment.save()
      .then(Measurment=> res.status(201).json(Measurment))
      .catch(err => res.status(400).json({ error: err.message }));
});

app.post('/robot', (req, res) => {
  const Robot = new RobotStatus(req.body);
  Robot.save()
      .then(RobotStatus=> res.status(201).json(RobotStatus))
      .catch(err => res.status(400).json({ error: err.message }));
});
 
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

app.get('/api/admin', authMiddleware, (req, res) => { res.status(200).json({ message: 'This is a protected route', user: req.user }); });
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

