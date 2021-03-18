import React from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'

//import { Header } from 'react-native/Libraries/NewAppScreen';

function Header (){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Todo App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
      height: 70, 
      backgroundColor: '#A833FF',
      paddingTop:22,
    },
    
  title:{
    fontSize: 22,
    color: '#efefef',
    textAlign: 'center',
    fontWeight: '700',
    

  }
  });
export default Header;
