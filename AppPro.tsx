import React from 'react';

import {Text, View, StyleSheet, useColorScheme} from 'react-native';

function AppPro():JSX.Element {

    const isDarkMode = useColorScheme()
  return (
    <View style={styles.container}>
      
      <Text>Hello Shyam Krishnan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
  
}
)

export default AppPro;
