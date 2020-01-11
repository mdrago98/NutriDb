import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {getDetails} from '../actions';
import {DataTable, Appbar} from 'react-native-paper';
import styles from '../styles';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';

const mapStateToProps = state => {
  return {
    food: state.food,
    details: state.foodDetails,
    title: state.foodDetails.description || '',
    nutrients:
      (state.foodDetails.nutrients && [
        state.foodDetails.nutrients &&
          state.foodDetails.nutrients
            .filter(nut => nut.nutrient.name === 'Copper, Cu')
            .shift(),
        ...(state.foodDetails.nutrients &&
          state.foodDetails.nutrients.filter(
            nut => nut.nutrient.name !== 'Copper, Cu',
          )),
      ]) ||
      [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    queryDetails: id => dispatch(getDetails(id)),
  };
};

class SearchDetail extends Component {
  componentDidMount() {
    const {navigation} = this.props;
    this.props.queryDetails(navigation.getParam('itemId', '0'));
  }

  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Appbar.Header>
          <Appbar.BackAction
            icon="delete"
            onPress={() => navigation.navigate('Search', {})}
          />
          <Appbar.Content
            title={navigation.getParam('title', 'Details')}
            subtitle={navigation.getParam('itemId', 'id')}
          />
        </Appbar.Header>
        <ScrollView
          styles={styles.container}
          contentContainerStyle={styles.content}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Nutrient</DataTable.Title>
              <DataTable.Title numeric>Amount</DataTable.Title>
              <DataTable.Title>Unit</DataTable.Title>
            </DataTable.Header>
            {this.props.nutrients.map((nut, key) => {
              return (
                <DataTable.Row key={key}>
                  <DataTable.Cell>{nut.nutrient.name}</DataTable.Cell>
                  <DataTable.Cell numeric>{nut.amount}</DataTable.Cell>
                  <DataTable.Cell>{nut.nutrient.unitName}</DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </DataTable>
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(SearchDetail));
