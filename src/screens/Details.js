import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

const Details = ({route}) => {
  const selectedItem = route.params?.selectedItem || null;

  return (
    <View style={style.text}>
      <Text style={style.font}>{selectedItem ? selectedItem.name : ''}</Text>
      <Text  style={style.font}>{selectedItem ? selectedItem.email : ''}</Text>
      <Text  style={style.font}>{selectedItem ? selectedItem.mobile : ''}</Text>
      <Text  style={style.font}>{selectedItem ? selectedItem.gender : ''}</Text>
      <Text  style={style.font}>{selectedItem ? selectedItem.state : ''}</Text>
      <Text  style={style.font}>{selectedItem ? selectedItem.city : ''}</Text>
    
    </View>
  );
};
export default Details;
const style = StyleSheet.create({
  text:{
    margin:20,
    padding:10,
    //backgroundColor:'red',
    
    
  },
  font:{
    color:'green',
    fontSize:20,
  }
});
