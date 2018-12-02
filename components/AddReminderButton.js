import React, {Component} from 'react';
import {AppRegistry, Button, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
// import dict from '../screens/ReminderScreen';
import {globalMap} from '../constants/global';



export default class AddReminderButton extends React.Component{
    static defaultProps = {
        reminders: 'No Reminders set',
    }
    constructor(props){
        super(props);
        this.state = {
            reminder: 'do nothing',
            rtime: '1'
        }
    }
    
    onChangeReminder(value){
        this.setState({reminder: value});
    }
    onChangeTime(value){
        this.setState({rtime: value});
    }
    startTimer(){
        setTimeout(this.alarm, this.state.rtime);
    }

    onPress(){
        globalMap.push({key: this.state.reminder, value: this.state.rtime});
        startTimer();
    }


    render(){
        return(
            <View>

                <Text>Set a new reminder below</Text>
                <TextInput
                    placeholder="Reminder"
                    value={this.state.reminder}
                    style={{borderColor: 'gray', borderWidth:1}}
                    onChangeText={(value) => this.onChangeReminder(value)}
                />
                <TextInput
                    placeholder="Time"
                    value={this.state.rtime}
                    style={{borderColor: 'gray', borderWidth:1}}
                    onChangeText={(value) => this.onChangeTime(value)}
                />
                <Button
                    title="Add"
                    style={styles.container}
                    onPress={this.onPress}
                    underlayColor="blue">
                    <View>
                        <Text>Add</Text>
                    </View>
                </Button>
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