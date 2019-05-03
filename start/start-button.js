import * as React from 'react';
import { FAB, Portal } from 'react-native-paper';

export default class StartButton extends React.Component {
  state = {
    open: false,
  };

  render() {
    return (
      <Portal>
        <FAB.Group
          open={this.state.open}
          icon="add"
          actions={[
            { icon: 'add', label: 'Lägg nytt spår', onPress: () => console.log('Pressed add') },
            { icon: 'add', label: 'Gå ett spår', onPress: () => console.log('Pressed star')},
          ]}
          onStateChange={({ open }) => this.setState({ open })}
          onPress={() => {
            if (this.state.open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    );
  }
}