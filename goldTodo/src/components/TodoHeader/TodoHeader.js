import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';

const styles = {
    viewStyle: {
      textAlign: 'center',
    },
    textStyle: {
      fontSize: 28,
      color: '#FFF',
      marginTop: 120,
      marginBottom: 90,
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
