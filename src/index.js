/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchPage from './pages/search-page';
import MedicationView from './pages/medication-view';
import {View} from 'react-native';
import {BottomNavigation} from 'react-native-paper';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

class App extends Component {
  state = {
    index: 0,
    routes: [
      {key: 'search', title: 'Search', icon: 'magnify'},
      {key: 'logMedication', title: 'Log Meds', icon: 'clipboard-text'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    search: SearchPage,
    logMedication: MedicationView,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
