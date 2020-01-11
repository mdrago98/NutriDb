import React, {Component} from 'react';
import {Searchbar, ActivityIndicator} from 'react-native-paper';
import {View} from 'react-native';
import {queryFood, toggleSearch, updateQuery} from '../actions';
import styles from '../styles';
import {connect} from 'react-redux';
import CardList from '../components/card-list';

const mapStateToProps = state => {
  return {
    isSearchEnabled: state.isSearchEnabled,
    food: state.food,
    currentQuery: state.query,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchClick: (toggle = true) => {
      dispatch(toggleSearch(toggle));
    },
    queryFood: query => dispatch(queryFood(query)),
    updateQuery: queryText => dispatch(updateQuery(queryText)),
  };
};

class SearchPage extends Component {
  _handleSearch = text => this.props.queryFood(text);
  render() {
    return (
      <View>
        {/* <Appbar /> */}
        <View style={styles.row}>
          <Searchbar
            placeholder="Search food"
            style={styles.search}
            onIconPress={() => this.props.queryFood(this.props.currentQuery)}
            onChangeText={query => {
              this.props.updateQuery(query);
            }}
            // value={'test'}
          />
        </View>
        <CardList />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);
