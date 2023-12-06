import {View, Text, Button, Image, StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
        <Image source={require('../assets/splace.png')} style={styles.image} />    
       

      <View style={styles.button}>
        <Button
        
          title="Add portfolio"
          onPress={() => {
            navigation.navigate('Form');
          }}
        />

        <View style={{bottom: 45, width: 100, left: 200}}>
          <Button
            title="Listing"
            onPress={() => {
              navigation.navigate('Listing',{
            
              });
            }}
          />

          
         

        </View>

       
      </View>
     
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    // backgroundColor: 'grey',
    margin: 10,
    padding: 10,
    left: 50,
    top: 50,
  },
  button: {
    top: 100,
    width: 100,
    alignItems: 'center',
    left: 50,
  },
});
