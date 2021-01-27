import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { connect } from 'react-redux';
import { getLoginData } from '../actions/LoginAction'
import { NAVIGATION_DASHBOARD } from '../navigations/routes';
import { NativeModules } from 'react-native';

class LoginPage extends Component {
    state = {
        userName: '',
        password: '',
        device: ''
    }
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        NativeModules.Device.getDeviceName((err, name) => {
            console.log(err, name);
            { this.setState({ device: name }) }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>

                    <StatusBar style="auto" />
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="User name"
                            placeholderTextColor="#003f5c"
                            onChangeText={userName => this.setState({ userName })}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Password."
                            placeholderTextColor="#003f5c"
                            secureTextEntry={true}
                            onChangeText={password => this.setState({ password })}
                        />
                    </View>


                    <TouchableOpacity style={styles.loginBtn}
                        onPress={this.onGuestPress} >
                        <Text style={styles.submitButtonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <Text style={styles.forgot_button}>Device Name : {this.state.device}</Text>

                </View>
            </View>
        );
    }


    onGuestPress = () => {

        const loginObj = {
            userName: this.state.userName,
            password: this.state.password,
            device: this.state.device
        }


        this.props.callService(loginObj);
        this.props.navigation.navigate(NAVIGATION_DASHBOARD);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 23
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        alignSelf: 'center',
        height: 30,
        color: '#000',
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-end'
    },

    loginBtn: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white',
        alignSelf: 'center'
    }
});






const mapStateToProps = (state) => {
    const dataSource = state.LoginReducer.data
    return {
        dataSource
    }
}

const mapDispatchToProps = (dispatch) => ({
    callService: (loginObj) => dispatch(getLoginData(loginObj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
