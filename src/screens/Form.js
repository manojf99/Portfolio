import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/action';
import CheckBox from 'react-native-check-box'
const data = [
  {label: 'Maharastra', value: '1'},
  {label: 'Panjab', value: '2'},
  {label: 'Gujrat', value: '3'},
  {label: 'Hariyana', value: '4'},
];

const Form = ({navigation}) => {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [mobile, onChangeMob] = useState('');
  const [gender, onChangeGender] = useState('');
  const [state, onChangeState] = useState('');
  const [city, onChangeCity] = useState('');
  const [value, setValue] = useState(null);
  const [lable, setLable] = useState(null);
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const handleAddTodo = () => {
    dispatch(addTodo({name, email, mobile, gender, state, city}));
    onChangeName('');
    onChangeEmail('');
    onChangeMob('');
    onChangeGender('');
    onChangeState('');
    onChangeCity('');
    navigation.navigate('Listing');
  };

  const validateForm = () => {
    setErrors({});
    let errors = {};

    if (!name) {
      errors.name = 'Name is required.';
    }

    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }

    if (!mobile) {
      errors.mobile = 'Number is required.';
    } else if (mobile.length < 10) {
      errors.mobile = 'Enter correct Mobile number';
    } else if (!/^[0-9]+$/.test(mobile)) {
      errors.mobile = 'Mobile nunber is invalid.';
    }

    if (!gender) {
      errors.gender = 'Gender is required.';
    }
    if (!value) {
      errors.value = 'State is required.';
    }

    if (!city) {
      errors.city = 'city is required.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const FormSubmit=()=>{
    const isValid = validateForm();
    if (isValid) {
      handleAddTodo();
    }
  }

  return (
    <ScrollView>
      <View style={{margin: 20, padding: 0}}>
        <Text style={{fontSize: 20, justifyContent: 'center'}}>REGISTER</Text>
        <Text style={styles.font}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          onChangeText={onChangeName}
          value={name}
        />
        <Text style={{color: 'red'}}> {errors.name ? errors.name : ''}</Text>

        <Text style={styles.font}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={onChangeEmail}
          value={email}
        />
        <Text style={{color: 'red'}}> {errors.email ? errors.email : ''}</Text>

        <Text style={styles.font}>Mobile</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Mobile"
          onChangeText={onChangeMob}
          keyboardType="number-pad"
          value={mobile}
        />
        <Text style={{color: 'red'}}>
          {' '}
          {errors.mobile ? errors.mobile : ''}
        </Text>

        <Text style={styles.font}>Gender</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Gender"
          onChangeText={onChangeGender}
          value={gender}
        />

        <Text style={{color: 'red'}}>{errors.gender ? errors.gender : ''}</Text>

        <Text style={styles.font}>State</Text>

        <Dropdown
          style={styles.dropdown}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
            onChangeState(item.label);
          }}
        />

        <Text style={{color: 'red'}}> {errors.value ? errors.value : ''}</Text>
        <Text style={styles.font}>city</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter City"
          onChangeText={onChangeCity}
          value={city}
        />
        <Text style={{color: 'red'}}> {errors.city ? errors.city : ''}</Text>

        <CheckBox 
        // value={isSelected}
        // onValueChange={setSelection}
        // style={styles.checkbox}
        />

       

        <View style={{marginTop: 20}}>
          <Button
            title="Submit"
            onPress={() => {
              FormSubmit()
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    color: 'black',
    height: 30,
    // margin: 12,
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
  font: {
    color: 'blue',
    fontSize: 15,
    margin: 10,
  },
  dropdown: {
    margin: 5,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
