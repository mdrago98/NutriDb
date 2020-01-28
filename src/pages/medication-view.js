import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {FAB, Text} from 'react-native-paper';
import styles from '../styles';
import {connect} from 'react-redux';
import Timeline from 'react-native-timeline-flatlist';
import {withNavigation} from 'react-navigation';

const mapStateToProps = state => {
  return {
    data: state.events.map(event => {
      const date = new Date(event.timeOfEvent);
      return {
        time: `${date.getHours()}:${date.getMinutes()}`,
        title: event.description,
        description: event.eventType,
      };
    }),
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class MedicationView extends Component {
  determineStyle = () =>
    !this.props.data
      ? {
          ...styles.container,
          ...styles.centerItem,
        }
      : {
          ...styles.timelineContainer,
        };
  render() {
    return (
      <SafeAreaView style={this.determineStyle()}>
        {this.props.data && (
          <Timeline
            circleSize={20}
            circleColor="rgb(45,156,219)"
            lineColor="rgb(45,156,219)"
            timeContainerStyle={{minWidth: 52, marginTop: -5}}
            timeStyle={styles.timeStyle}
            descriptionStyle={{color: 'gray'}}
            style={styles.list}
            options={{
              style: {paddingTop: 5},
            }}
            data={this.props.data}
          />
        )}
        {!this.props.data && <Text>There are no events to display</Text>}
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => this.props.navigation.navigate('MedicationEntry', {})}
        />
      </SafeAreaView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(MedicationView));
