
import React, { useState } from 'react';
import Header from './components/Header';
import TodoItem from './components/todoItem';
import AddTodos from './components/addTodos';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import TodoItem from './components/todoItem';

// import {
//   Colors,
//   Header,
//   DebugInstructions,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';



const App = () => {

  const [todo, setTodo] = useState([
    { text: 'Milk', id: 1 },
    { text: 'Banana', id: 2 },
    { text: 'Safder', id: 3 },
    { text: 'Moiz', id: 4 },
    { text: 'Fauji', id: 5 },

  ]);

  const pressHandler =(key) => {
    setTodo((prevTodos) => {
      return prevTodos.filter(todo=>todo.key !=key)
    });
  }

  const submitHandler = (text) =>{
    setTodo((prevTodos)=>{
      {
        return[
       { text: text, key: Math.random().toString() },
        ...prevTodos 
        ];
    }});
  }
  return (
    <View style={styles.container}>
      <Header />
      <View styles={styles.content}>
        <AddTodos submitHandler = {submitHandler} />
        <View styles={styles.list}>
          
          <FlatList 
          data={todo}
          renderItem={({item})=>
          <TodoItem item={item} pressHandler ={pressHandler} />
        }
          />
 
        </View>
      </View>
    </View>

  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  content: {
    margin:60,
    padding: 60,
    
  },
  list: {
    margin: 20,
  }, 
  
});

export default App;
