import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://picsum.photos/300/300',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Light House</Text>
          <Text style={styles.cardLabel}>Queen of Arabia, Kochi..</Text>
          <Text style={styles.cardDescription}>
            Queen of Arabia, Kochi.sdvc sdvcs dcsdcsd csdcsdcs dcdscs.
          </Text>
          <Text style={styles.cardFooter}>One hour drive</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  
  },
  card: {
    width:335,
    height:360,
    borderRadius:10,
    marginVertical:12,
    marginHorizontal:12,
    

  },
  cardElevated: {
    backgroundColor:'white',  
     elevation:3,
     shadowOffset:{
      width:1,
      height:1
     }
  },
  cardImage: {
    height: 200,
    marginBottom:8,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },
  cardTitle: {
    color:'gray',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:4,
  },
  cardLabel: {
    color:'gray',
    fontSize:16,
    marginBottom:4

  },
  cardDescription: {
    color:'gray',
    fontSize:14,
    marginBottom:12,
    marginTop:6,
    
  },
  cardFooter:{
    color:'gray'
  }
});
