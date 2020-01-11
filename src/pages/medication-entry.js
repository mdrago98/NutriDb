import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {getDetails} from '../actions';
import {DataTable, Appbar} from 'react-native-paper';
import styles from '../styles';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

class MedicationEntry extends Component {
  render() {
    return <View>med entry</View>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(MedicationEntry));
