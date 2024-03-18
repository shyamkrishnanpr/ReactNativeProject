import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: '001',
      name: 'John Doe',
      status: 'active',
      imageUrl: 'https://placebeard.it/640x360',
    },
    {
      uid: '002',
      name: 'Jane Smith',
      status: 'inactive',
      imageUrl: 'https://placebeard.it/640x360',
    },
    {
      uid: '003',
      name: 'Alice Johnson',
      status: 'active',
      imageUrl: 'https://placebeard.it/640x360',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />

            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    marginBottom:6,
    backgroundColor:'#99AAAB',
    padding:4,
    borderRadius:8
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight:14
  },
  userName: {
    fontSize:16,
    fontWeight:'600',
    color:'white'
  },
  userStatus: {
    fontSize:12,
  },
});
