import React from 'react';
import {
  AppRegistry,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Reminders from '../components/Reminders';
import AddReminderButton from '../components/AddReminderButton'
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { globalMap } from '../constants/global';

// globalMap.push({key: 'what', value: "time"});



export default class ReminderScreen extends React.Component{

  alert(){
    console.log("Alert passed")
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Reminders</Text>
        <FlatList data={globalMap} 
          renderItem={({item}) => <Text style={styles.item}>{item.key} in {item.value} seconds
              <script>
                setTimeout({this.alert},{item.value});
              </script>
          </Text>}/>
        <AddReminderButton />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
