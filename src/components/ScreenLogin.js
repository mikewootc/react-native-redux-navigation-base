import React, { Component }                             from 'react';
import { StyleSheet, View, Text, TextInput, Button, ActivityIndicator }    from 'react-native';

export default class ScreenLogin extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    getLogging() {
        if (this.props.loggedIn == 'LOGGING') {
            return <ActivityIndicator size='large' color='#888888' />;
        } else {
            return null;
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={styles.formLabel}>Name</Text>
                <TextInput
                  style={styles.form}
                  placeholder='Your user name'
                  onChangeText={this.props.onUserNameInput}
                />

                <Text style={styles.formLabel}>Password</Text>
                <TextInput
                  style={styles.form}
                  placeholder='Your password'
                  onChangeText={this.props.onPasswordInput}
                />

                <View style={{height: 20}} />

                <Button
                    onPress={this.props.onPressLogin}
                    title="Login"
                    color="#4080f0"
                    accessibilityLabel="Login"
                />

                <View style={{height: 20}} />

                { this.getLogging() }

                <View style={{flex: 1}} />

            </View>
        );
    }
}


const styles = StyleSheet.create({
        formLabel: {
            fontWeight: 'bold',
        },
        form: {
            height: 40,
        },
});



