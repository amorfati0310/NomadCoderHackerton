import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  ScrollView,
  AsyncStorage
} from 'react-native';
import TodoHeader from './src/components/TodoHeader';
import TodoInput from './src/components/TodoInput'; 
import TodoItem from './src/components/TodoItem';

import uuidv1 from "uuid/v1";

const { height, width } = Dimensions.get("window");

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const alertMessage = {
  1: "Let's get it",
  2: "Let's get it",
  3: "Let's get it",
  4: "Let's get it",
  5: "Let's get it",
  6: "Let's get it",
  7: "Let's get it",
  8: "Let's get it", 
  9: "Let's get it",
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f08c00',
  },
  title: {
    color: '#fff',
    fontSize: 32,
  }, 
 
  Input: {
    flex: 1,
  }, 
  button: {
    backgroundColor: '#000',
  },
  todoItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 200,
    height: 50,
    marginBottom: 50,
  },
  checkIcon: {
    width: 34,
    height: 34,
  },
  todosContainer: {
    marginTop: 20,
  }
}
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { 
      newToDo: '',
      toDos: {},
      err: false,
    };
  }
  _controllNewToDo = text => {
    this.setState({
      newToDo: text
    });
    console.log('this.state.newTodo',this.state.newToDo);
  }
  _addToDo = () => {
    if(Object.values(this.state.toDos).length>=3){
      return this.setState({err: true});
    }
    const newToDo = this.state.newToDo.trim();
    if(!newToDo) return ;
    this.setState(prevState => {
      const ID = uuidv1();
      const newToDoObject = {
        [ID]: {
          id: ID, 
          isCompleted: false,
          text: newToDo, 
          createdAt: Date.now()
        }
      };
      const newState = {
        ...prevState,
        newToDo: "",
        toDos: {
          ...prevState.toDos,
          ...newToDoObject
        }
      };
      this._saveToDos(newState.toDos)
      return {...newState};
    })
  }
  _saveToDos = newToDos => {
    const saveToDos = AsyncStorage.setItem("toDos", JSON.stringify(newToDos));
  }
  _deleteToDo = id => {
    this.setState(prevState => {
      const toDos = prevState.toDos;
      delete toDos[id];
      const newState = {
        ...prevState,
        ...toDos
      };
      this._saveToDos(newState.toDos);
      return { ...newState };
    });
  };
  _uncompleteToDo = id => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: {
            ...prevState.toDos[id],
            isCompleted: false
          }
        }
      };
      this._saveToDos(newState.toDos);
      return { ...newState };
    });
  };
  _completeToDo = id => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: { ...prevState.toDos[id], isCompleted: true }
        }
      };
      this._saveToDos(newState.toDos);
      return { ...newState };
    });
  };
  _updateToDo = (id, text) => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: { ...prevState.toDos[id], text: text }
        }
      };
      this._saveToDos(newState.toDos);
      return { ...newState };
    });
  };
  _getAlert = (err) => {
      if(err){
        return ':3개만 입력해야 된다고 !!!';
      }
      else{
        return "Let's get it :3"
      }
  }
  render() {
    console.log(this.state.newToDo)
    const { newToDo, toDos } = this.state;
    
    const {_controllNewToDo, _addToDo, _deleteToDo, _uncompleteToDo, _completeToDo, _updateToDo, _getAlert } = this;
    return (
      <View style={styles.container}>
       <StatusBar barStyle="light-content" />
       <TodoHeader alertMessage={_getAlert(this.state.err)}/>
        <Text style={styles.title}>Golden Things :3</Text>
        <TodoInput
          placeholder={"Set Your Today :3"}
          value={newToDo}
          onChangeText={_controllNewToDo}
          onPress={_addToDo}
        />
        <View style={styles.todosContainer}>
        {Object.values(toDos)
              .reverse()
              .map(toDo => (
                <TodoItem
                  key={toDo.id}
                  deleteToDo={_deleteToDo}
                  uncompleteToDo={_uncompleteToDo}
                  completeToDo={_completeToDo}
                  updateToDo={_updateToDo}
                  {...toDo}
                />
              ))}
        </View>
      </View>
    );
  }
}

