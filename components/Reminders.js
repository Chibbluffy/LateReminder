import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Reminders extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'reminders',
            reminders: this.props.reminders
        }

    }
    static defaultProps = {
        reminders: 'No Reminders set'
    }

    render(){
        return(
            <View>
                <Text>{this.state.reminders}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Reminders', () => Reminders);