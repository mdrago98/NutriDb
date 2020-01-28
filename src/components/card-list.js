import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import {connect} from 'react-redux';
import styles from '../styles';
import {withNavigation} from 'react-navigation';

const mapStateToProps = state => {
  return {
    food: state.food,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class CardList extends Component {
  render() {
    return (
      <ScrollView
        styles={styles.container}
        contentContainerStyle={styles.content}>
        {this.props.food.map((value, _) => {
          return (
            <Card
              elevation={2}
              key={value.fdcId}
              style={styles.card}
              onPress={() => {
                this.props.navigation.navigate('Details', {
                  itemId: value.fdcId,
                  title: value.description,
                });
              }}>
              {value.description && (
                <Card.Title
                  title={value.description}
                  subtitle={`${value.dataType} ${value.brandOwner || ''}`}
                />
              )}
              <Card.Content>
                <Paragraph>ID: {value.fdcId}</Paragraph>
                {value.brandOwner && (
                  <Paragraph>Brand: {value.brandOwner}</Paragraph>
                )}
                {value.additionalDescriptions && (
                  <Paragraph>{value.additionalDescriptions}</Paragraph>
                )}
              </Card.Content>
              {/* TODO: Add image */}
              {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
            </Card>
          );
        })}
      </ScrollView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(CardList));
