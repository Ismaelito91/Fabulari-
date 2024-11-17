require('dotenv').config();
const express = require('express');
const app = require('./app'); // Importation de app.js
const pool = require('./config/db'); // Importation de la BDD

const PORT = process.env.PORT || 3000;

// Test de connexion à la BDD avant de lancer le serveur
(async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('✅ Connected to PostgreSQL database at startup');
  } catch (err) {
    console.error('❌ Failed to connect to PostgreSQL database at startup:', err);
  }

  // Lancer le serveur
  app.listen(PORT, () => {
    console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`);
  });
})();
