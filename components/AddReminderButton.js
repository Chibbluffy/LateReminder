import React, {Component} from 'react';
import {AppRegistry, Button, ListView, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {globalMap} from '../constants/global';

export default class AddReminderButton extends React.Component{
    constructor(props){
        super(props);
        this.dsinit = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2 });
        var items = this.dsinit.cloneWithRows([]);
        this.state = {
            reminders: Object.keys(globalMap),
            reminder: 'do nothing',
            rtime: '1',
        }
    }
    static defaultProps = {
        reminders: 'No Reminders set',
    }
    
    onChangeReminder(value){
        this.setState({reminder: value}, () => {console.log(this.state.reminder)});
    }
    onChangeTime(value){
        this.setState({rtime: value}, () => {console.log(this.state.rtime)});
    }

    startTimer(){setTimeout(this.alarm, this.state.rtime);}

    alarm(){
        console.log("THIS IS A REMINDER");
    }

    renderRow(row){
        return <Text>row</Text>
    }

    onPress(state){
        globalMap.push({key: state.state.reminder, value: state.state.rtime});
        state.state.reminders = Object.keys(globalMap);
        state.startTimer();
    }

    render(){
        return(
            <View>


                <Text style={{height: 20}}>Set a new reminder below</Text>
                <TextInput
                    placeholder="Reminder action"
                    style={{height: 25, borderColor: 'gray', borderWidth:1}}
                    onChangeText={(value) => this.onChangeReminder(value)}
                />
                <TextInput
                    placeholder="Seconds until reminder"
                    style={{height: 25, borderColor: 'gray', borderWidth:1}}
                    onChangeText={(value) => this.onChangeTime(value)}
                />
                <Button
                    title="Add"
                    style={styles.container}
                    onPress={() => this.onPress(this)}
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
    height: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
});