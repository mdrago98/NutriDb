import React, {Component} from 'react';
import {Appbar} from 'react-native-paper';

class ModalHeader extends Component {
  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction icon="delete" onPress={() => this.props.onBack()} />
        <Appbar.Content
          title={this.props.title}
          subtitle={this.props.subtitle}
        />
      </Appbar.Header>
    );
  }
}

export default ModalHeader;
