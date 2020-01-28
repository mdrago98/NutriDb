import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, View, Picker, Platform} from 'react-native';
import {withNavigation} from 'react-navigation';
import ModalHeader from '../components/modal-header';
import {
  TextInput,
  Checkbox,
  Text,
  TouchableRipple,
  HelperText,
  FAB,
} from 'react-native-paper';
import styles from '../styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {saveEvent} from '../actions';
import {getHumanTime} from '../utils/time-utils';
import NotifService from '../notification-service';
import appConfig from '../../app.json';
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    saveThisEvent: (eventType, date, description) => {
      dispatch(
        saveEvent({
          eventType: eventType,
          timeOfEvent: date,
          description: description,
        }),
      );
    },
  };
};

class MedicationEntry extends Component {
  state = {
    eventType: 'medication',
    checked: true,
    date: new Date(),
    mode: 'date',
    show: false,
    reminder: '30',
    description: '',
  };

  constructor(props) {
    // TODO GCM ID
    super(props);
    this.state = {
      senderId: appConfig.senderID,
    };

    this.notif = new NotifService(
      this.onRegister.bind(this),
      this.onNotif.bind(this),
    );
  }

  changeEventType = (itemValue, itemIndex) =>
    this.setState({
      eventType: itemValue,
      description: this.generateDescription(itemValue),
      checked: itemIndex === 0,
    });

  generateDescription = eventType => `${getHumanTime(new Date())} ${eventType}`;

  componentDidMount() {
    this.generateDescription();
  }

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  showDateTime = mode => {
    this.setState({
      show: true,
      mode,
    });
  };

  datepicker = () => {
    this.showDateTime('date');
  };

  timepicker = () => {
    this.showDateTime('time');
  };

  _isReminderValid = number => !isNaN(number) && number >= 0;

  _toggleReminder = () => {
    const newChecked = !this.state.checked;
    this.setState({checked: newChecked, reminder: newChecked ? '30' : ''});
  };

  _submit = () => {
    this.props.saveThisEvent(
      this.state.eventType,
      this.state.date,
      this.state.description,
    );
    const notificationTime = new Date();
    notificationTime.setMinutes(
      notificationTime.getMinutes() + this.state.reminder,
    );
    this.notif.scheduleNotif();
    this.props.navigation.goBack();
  };

  render() {
    const {navigation} = this.props;
    const {show, date, mode} = this.state;
    return (
      <SafeAreaView style={{...styles.container, paddingVertical: 0}}>
        <ModalHeader
          onBack={() => navigation.navigate('MedicationView', {})}
          title="Medication Entry"
          subtitle=""
        />
        <View>
          <Picker
            mode="dropdown"
            selectedValue={this.state.eventType}
            onValueChange={this.changeEventType}>
            <Picker.Item label="Medication" value="medication" />
            <Picker.Item label="Food Consumption" value="food consumption" />
          </Picker>
        </View>
        <View style={styles.row}>
          <TouchableRipple onPress={this.datepicker} elevation={3}>
            <View style={styles.column}>
              <Text>{date.toDateString()}</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={this.timepicker} elevation={3}>
            <View style={styles.column}>
              <Text>
                {date.getHours()}:{date.getMinutes()}
              </Text>
            </View>
          </TouchableRipple>
        </View>
        <View style={styles.inputContainerStyle}>
          <TextInput
            style={styles.column}
            mode="outlined"
            label="Description"
            value={this.state.description}
            onChangeText={description => this.setState({description})}
          />
          <TouchableRipple
            onPress={() => {
              this.setState({checked: !this.state.checked});
            }}>
            <View style={styles.row}>
              <Text>Set a reminder?</Text>
              <Checkbox
                status={this.state.checked ? 'checked' : 'unchecked'}
                onPress={this._toggleReminder}
              />
            </View>
          </TouchableRipple>
          {this.state.checked && (
            <View style={{...styles.inputContainerStyle}}>
              <TextInput
                style={styles.column}
                mode="outlined"
                label="Remind in:"
                value={this.state.reminder}
                error={!this._isReminderValid(this.state.reminder)}
                onChangeText={reminder => this.setState({reminder})}
              />
              <Text style={styles.column}>Minutes</Text>
              <HelperText
                type="error"
                visible={!this._isReminderValid(this.state.reminder)}>
                Error: Input is not valid. Must be a number greater than 0.
              </HelperText>
            </View>
          )}
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={this.setDate}
          />
        )}
        <FAB
          icon="check"
          style={styles.fab}
          onPress={() => {
            this.props.saveThisEvent(
              this.state.eventType,
              this.state.date,
              this.state.description,
            );
            this.props.navigation.goBack();
          }}
        />
      </SafeAreaView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(MedicationEntry));
