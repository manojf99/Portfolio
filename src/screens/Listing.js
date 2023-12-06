import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';


const Listing = ({navigation}) => {
 
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();
  console.log('todos', todos);

  const renderItem = ({item}) => (
    <View style={style.box}>
      <Text style={style.text}>{item.name }</Text>
      <View style={style.button}>
        <Button
          title="Details"
          onPress={() => {
            navigation.navigate('Details',{selectedItem: item});
          }}
        />
      </View>
      
      {/* <Text style={style.text}>{item.email}</Text>
      <Text style={style.text}>{item.mobile}</Text>
      <Text style={style.text}>{item.gender}</Text>
      <Text style={style.text}>{item.state}</Text>
      <Text style={style.text}>{item.city}</Text> */}
    </View>
  );

  return (
    <View>
      <FlatList
        scrollEnabled={true}
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
};
export default Listing;

const style = StyleSheet.create({
  box: {
    margin: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#E0FFFF',
  },
  text: {
    paddingBottom: 5,
     margin:10,
     paddingStart:20,
    color: 'black',
    fontSize:20,
  },
  button: {
    width: 70,
    left: 250,
    bottom:20
  },
});
