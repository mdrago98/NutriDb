/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Appbar, Paragraph, Searchbar} from 'react-native-paper';
import {View} from 'react-native';
import styles from './styles';

export default class App extends Component {
  _goBack = () => console.log('Went back');

  _handleSearch = () => this.setState({isSearchEnabled: true});

  _handleMore = () => console.log('Shown more');

  state = {
    isSearchEnabled: false,
    firstQuery: '',
  };

  render() {
    return (
      <View>
        <Appbar.Header>
          {/* <Searchbar
            placeholder="Search groups or items"
            style={styles.search}
            onChangeText={query => {
              setUserData(query);
            }}
            value={userData}
          /> */}
          {this.state.isSearchEnabled && (
            <Searchbar
              placeholder="Search"
              icon="arrow-left"
              onIconPress={() => {
                this.setState({isSearchEnabled: false});
              }}
            />
          )}

          {/* <Searchbar placeholder="Search" icon="arrow-left" /> */}
          <Appbar.Content title="NutriDatabase" />
          <Appbar.Action icon="magnify" onPress={this._handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
        </Appbar.Header>
        <View style={styles.row}>
          <Paragraph>Left icon</Paragraph>
        </View>
      </View>
    );
  }
}
