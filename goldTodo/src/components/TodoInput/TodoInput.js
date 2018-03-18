import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';

const styles = {
    viewStyle: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      width: 295,
      height: 60,
      padding: 5,
      marginTop: 20,
      paddingTop: 15,
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
        width: 265,
        height: 100,
        padding: 20,
    },
    addBtn: {
      width: 30,
      height: 30,
      marginRight: 20,
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
