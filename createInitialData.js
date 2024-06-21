const bcrypt = require('bcrypt');
const { sequelize } = require('./config/database'); 
const User = require('./models/User'); 

async function createInitialData() {
  try {
    const existingUsers = await User.findAll();
        if (existingUsers.length > 0) {
            console.log('Des utilisateurs existent déjà. Aucune action supplémentaire nécessaire.');
            return;
        }
     const passwordHash = await bcrypt.hash('121566', 10); 
    await User.create({
      full_name: 'wiem mili',
      email: 'miliwiem@gmail.com',
      password: passwordHash,
      telephone: '98236957', 
    });

    console.log('Données initiales créées avec succès.');
  } catch (error) {
    console.error('Erreur lors de la création des données initiales :', error);
    throw error; 
  }
}

module.exports = createInitialData;
