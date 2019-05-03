import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Title, Text, Headline } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

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

class History extends Component {
  render() {
    const { previousTracks } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Headline>Tidigare spår</Headline>
        {
            previousTracks.map((track, i) => 
                <TouchableOpacity style={styles.item} key={`track-${i}`}>
                    <View style={styles.itemIcon}>
                        <Icon name="dog-side" size={25} color="#000" />
                    </View>
                    <View style={styles.itemContent}>
                        <Title>{track.when.readable}</Title>
                        <Text>{`${track.retrieves.found} / ${track.retrieves.total}`} | {track.duration.readable}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
    previousTracks: state.history.previousTracks,
});

export default connect(mapStateToProps, null)(History);