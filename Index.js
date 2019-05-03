import React from 'react';
import { View } from 'react-native';
import StartButton from './start/start-button';
import History from './history/components/History';


export default class Index extends React.Component {
  render() {
    return (
      <View>
        <History />
        <StartButton />
      </View>
    );
  }
}
