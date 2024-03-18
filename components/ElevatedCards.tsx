import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.elevated]}>
            <Text>Tap 1</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>Tap 2</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>Tap 3</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>Tap 4</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>Tap 5</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
      },
      container:{
        padding:8,

      },
      card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:8,
        margin:8
    
      },
      elevated:{
        backgroundColor:"gray",
        elevation:8,
        shadowOffset:{
            width:2,
            height:2
        },
        shadowColor:'green',
        shadowOpacity:0.4,
        shadowRadius:2
      }
})