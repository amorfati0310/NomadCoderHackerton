import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';

const styles = {
    viewStyle: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#F8F8F8',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 295,
      height: 60,
      marginTop: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      fontSize: 20
    },
    textInput: {
        width: 215,
        height: 60,
        marginLeft: 20,
    },
    addBtnContainer: {
      display: 'flex',
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#999',
    },
    addBtn: {
      width: 30,
      height: 30,
    }
  };
// Make a component
const TodoInput = ({value, onChangeText, onKeyPress, onPress, placeholder}) => {
  return (
    <View style={styles.viewStyle}>
      <TextInput 
        value={value}
        style={styles.textInput}
        onChangeText={onChangeText}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        returnKeyType="done"
        autoCorrect={false}
        placeholderTextColor="#999"
      />
      <TouchableOpacity
          style={styles.addBtnContainer}
          onPress={onPress}
        >
          <Image
              style={styles.addBtn}
              source={require("../../../images/add.png")}/>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;
