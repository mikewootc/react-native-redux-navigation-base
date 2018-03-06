import React, { Component }                             from 'react';
import { StyleSheet, View, Text, TextInput, Button, ActivityIndicator }    from 'react-native';

export default class ScreenLogin extends Component {
    static navigationOptions = {
        title: 'VideoCall',
    };

    render() {
        return (
            <View>
                <Text>video call</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
        loginName: {
            fontWeight: 'bold',
        },
        form: {
            height: 40,
        },
});



