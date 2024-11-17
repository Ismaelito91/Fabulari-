const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./config/db'); // Importation de la connexion DB

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Route test pour vérifier le serveur
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API Fabulari!');
});

// Route pour tester la connexion à la base de données
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('📊 Current time from DB:', result.rows[0]);
    res.status(200).json({ message: 'Database connected!', time: result.rows[0] });
  } catch (error) {
    console.error('❌ Error fetching data from DB:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

module.exports = app;
