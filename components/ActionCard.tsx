import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new here...</Text>
        </View>
        <Image
          source={{uri: 'https://picsum.photos/seed/picsum/300/300'}}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://reactnative.dev/docs/linking#openurl')
            }>
            <Text style={styles.socialLinks}>Read more...</Text>
          </TouchableOpacity>
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
    width: 335,
    height: 360,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 12,
  },
  elevatedCard: {
    backgroundColor: 'gray',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 200,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 10,
  },
  socialLinks: {
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
});
