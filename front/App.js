import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios.get('http://localhost:3000')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de l\'appel à l\'API:', error);
      });
  }, []);

  return (
    <View>
      <Text>Bienvenue dans Fabulari !</Text>
    </View>
  );
};

export default App;
