import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, TextInput } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = {
  container: {
    width: 295,
    height: 60,
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cirlcle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    marginRight: 20,
    borderColor: '#999',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkImg: {
    width: 25,
    height: 25,
  },
  xButton: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 20,
  },
  completedText: {
    color: "#999",
    textDecorationLine: "line-through"
  },
  unCompletedText: {
    color: 'black',
  },
}

export default class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      toDoValue: props.text,
    }
  }
  render(){
    const {toDoValue, isEditing} = this.state;
    const {text, id, deleteToDo, isCompleted } = this.props;
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.cirlcle} onPress={this._toggleComplete}>
          {isCompleted&&
          <Image
            style={styles.checkImg}
            source={require("../../../images/gold.png")}/>}
        </TouchableOpacity>
        <TouchableOpacity>
          {isEditing 
            ?
          <TextInput 
            style={[styles.text, isCompleted ? styles.completedText : styles.unCompletedText]} 
            value={toDoValue} 
            onChangeText={this._controllInput}
            returnKeyType={"done"}
            onBlur={this._finishEditing}
            underlineColorAndroid={"transparent"}
            />
            :
          <Text
          onPress={this._startEditing} 
          style={[styles.text, isCompleted ? styles.completedText : styles.unCompletedText]}>{text}</Text>}
        </TouchableOpacity>
        <TouchableOpacity
          onPressOut={event => {
            event.stopPropagation;
            deleteToDo(id);
          }}
        >
          <Image
              style={styles.xButton}
              source={require("../../../images/x-button.png")}/>
        </TouchableOpacity>
      </View>
    )
  }
  _toggleComplete = event => {
    event.stopPropagation();
    const { isCompleted, uncompleteToDo, completeToDo, id } = this.props;
    if (isCompleted) {
      uncompleteToDo(id);
    } else {
      completeToDo(id);
    }
  };
  _startEditing = event => {
    event.stopPropagation();
    this.setState({ isEditing: true });
  };
  _controllInput = text => {
    console.log(text);
    this.setState({ toDoValue: text });
    console.log('this.state.todoValue', this.state.toDoValue);
  }
  _finishEditing = event => {
    event.stopPropagation();
    const { toDoValue } = this.state;
    console.log('this.state.toDoValue', this.state.toDoValue)
    const { id, updateToDo } = this.props;
    updateToDo(id, toDoValue);
    this.setState({ isEditing: false });
  }
}