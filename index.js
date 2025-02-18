
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const admin = require('firebase-admin');
// const serviceAccount = require('./serviceAccountKey.json'); // Add your Firebase service account JSON here


// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://YOUR_PROJECT_ID.firebaseio.com' // Replace with your Firebase project URL
// });

// const db = admin.firestore();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());


// app.post('/api/drill-result', async (req, res) => {
//   try {
//     const { playerId, drillId, touches, correctTouches, timestamp } = req.body;
//     const resultRef = db.collection('drillResults').doc();

//     await resultRef.set({
//       playerId,
//       drillId,
//       touches,
//       correctTouches,
//       timestamp: timestamp || new Date().toISOString()
//     });

//     res.status(201).json({ success: true, id: resultRef.id });
//   } catch (error) {
//     console.error('Error saving drill result:', error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
