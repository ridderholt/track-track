import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Title, Text, Headline } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StartButton from './start/start-button';


export default class Index extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Headline>Tidigare spår</Headline>
        {
            [1, 2, 3].map(i => 
                <TouchableOpacity style={styles.item} key={`track-${i}`}>
                    <View style={styles.itemIcon}>
                        <Icon name="dog-side" size={25} color="#000" />
                    </View>
                    <View style={styles.itemContent}>
                        <Title>2019-04-29 11:45</Title>
                        <Text>4 / 6 pinnar | 23min 2s</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        <StartButton />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20
  },
  item: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 10,
      marginTop: 10,
  },
  itemIcon: {
      justifyContent: 'center',
      marginRight: 10,
  },
  itemContent: {
  }
});
