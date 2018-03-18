import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';

const styles = {
    viewStyle: {
      textAlign: 'center',
    },
    textStyle: {
      fontSize: 20,
      color: '#FFF',
      marginTop: 150,
      marginBottom: 100,
    },
  };
// Make a component
const TodoHeader = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.alertMessage}</Text>
    </View>
  );
};

export default TodoHeader;
