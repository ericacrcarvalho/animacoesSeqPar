import React, { useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const Animations = () => {

  const [largura] = useState(new Animated.Value(20));
  const [altura] = useState(new Animated.Value(20));
  const [opacidade] = useState(new Animated.Value(0));
  const [opcBlack] = useState(new Animated.Value(1));
  const [tamanho] = useState(new Animated.Value(12));

    const executar = () => {
      Animated.sequence([
        Animated.timing(opacidade, {toValue:1, duration:2000}),
        Animated.parallel([
          Animated.timing(largura, {toValue:100,duration:2000}),
          Animated.timing(altura, {toValue:100,duration:2000}),
        ]),
        Animated.timing(opacidade, {toValue:0, duration:2000}),    
      ]).start();
    }

    Animated.loop(
      Animated.sequence([
        Animated.timing(opcBlack, {toValue:0, duration:1500}),
        Animated.timing(opcBlack, {toValue:1, duration:1500})
      ])      
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(tamanho, {toValue:28, duration:2000}),
        Animated.timing(tamanho, {toValue:12, duration:2000}),
      ])
    ).start();

  return (
    <View style={styles.container}>
      <View style={[styles.views, {backgroundColor:'gray'}]}>
        <Text style={styles.text}>Animações em paralelo e sequencial</Text>
        <Animated.View
          style={{width:largura, height:altura, backgroundColor:"darkred", margin:2, opacity:opacidade}}
        >
        </Animated.View>
        <Button
          style={{backgroundColor:'white'}}
          onPress={executar}
        >
          Executar
        </Button>
      </View>
      <View style={[styles.views, {backgroundColor:'black'}]}>
        <Text style={styles.text}>Animações em loop</Text>
        <Animated.Image
          style={{width:150, height:150, opacity:opcBlack}}
          source={require('../images/black.jpg')}
        />
        <Animated.Text
          style={{fontSize:tamanho, color:'white'}}
        >
          Buraco negro!
        </Animated.Text>
      </View>
    </View>
  );
}
export default Animations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  views: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }
});
