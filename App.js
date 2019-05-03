import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import Index from './Index';

const styles = StyleSheet.create({
  appHeader: {
    padding: 5,
  }
});

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
          <Appbar.Header style={styles.appHeader}>
              <Appbar.Content title="track track go" subtitle="din vän i skogen" />
          </Appbar.Header>
        <Index />
      </PaperProvider>
    );
  }
}

