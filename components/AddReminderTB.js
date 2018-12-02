import React, {Component} from 'react';
import {AppRegistry, Text, TextInput, View} from 'react-native';

export default class AddReminderTB extends React.Component{
    constructor(){
        super();
        this.state = {
            reminder: "",
            rtime: ""
        }
    }

    onChangeReminder(value){
        this.setState({reminder: value});
    }
    onChangeTime(value){
        this.setState({rtime: value});
    }

    render(){
        return(
            <View>
                <Text>Set a new alarm below</Text>
                <TextInput
                    placeholder="Reminder"
                    value={this.state.reminders}
                    onChangeText={(value) => this.onChangeReminder(value)}
                />
                <TextInput
                    placeholder="Time"
                    value={this.state.rtime}
                    onChangeText={(value) => this.onChangeTime(value)}
                />
                
            </View>
        );
    }
}


AppRegistry.registerComponent('AddReminderTB', () => AddReminderTB);