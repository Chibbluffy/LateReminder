import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Reminders extends React.Component{
    static defaultProps = {
        reminders: 'No Reminders set'
    }

    render(){
        return(
            <View>
                <Text>Set a new alarm</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Reminders', () => Reminders);