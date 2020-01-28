import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 28,
  },
  content: {
    padding: 8,
  },
  card: {
    margin: 4,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  wrapper: {
    flex: 1,
  },
  inputContainerStyle: {
    margin: 8,
  },
  search: {
    margin: 4,
  },
  timelineContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 35,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeStyle: {
    textAlign: 'center',
    backgroundColor: '#ff9797',
    color: 'white',
    padding: 5,
    borderRadius: 13,
  },
});

export default styles;
