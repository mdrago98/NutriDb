import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {FAB} from 'react-native-paper';
import styles from '../styles';
import {connect} from 'react-redux';
import Timeline from 'react-native-timeline-flatlist';
import {withNavigation} from 'react-navigation';

const mapStateToProps = state => {
  return {
    data: [
      {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
      {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
      {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
      {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
      {time: '16:30', title: 'Event 5', description: 'Event 5 Description'},
      {time: '16:30', title: 'Event 5', description: 'Event 5 Description'},
      {time: '16:30', title: 'Event 5', description: 'Event 5 Description'},
    ],
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class MedicationView extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Timeline data={this.props.data} />
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
      </SafeAreaView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(MedicationView));
