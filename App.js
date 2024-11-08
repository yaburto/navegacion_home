import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido/a al Home!</Text>
    </View>
  );
}

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo_municipalidad.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Pantalla Principal</Text>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Pantalla Principal' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
