import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
// import dict from '../screens/ReminderScreen';

export default class AddReminderButton extends React.Component{
    static defaultProps = {
        reminders: 'No Reminders set'
    }
    onPress(){
        // dict.push({key: , value: });
    }

    render(){
        return(
            <View>
                <TouchableHighlight
                    style={styles.container}
                    onPress={this.onPress}
                    underlayColor="blue">
                    <View>
                        <Text>Add</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}


AppRegistry.registerComponent('Reminders', () => Reminders);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});