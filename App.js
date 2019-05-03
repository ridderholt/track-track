import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './common/redux/store';
import Index from './Index';

const styles = StyleSheet.create({
  appHeader: {
    padding: 5,
  }
});

export default class App extends React.Component {
  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <Appbar.Header style={styles.appHeader}>
            <Appbar.Content title="track track go" subtitle="din vän i skogen" />
          </Appbar.Header>
          <Index />
        </PaperProvider>
      </StoreProvider>
    );
  }
}

