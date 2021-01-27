import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NAVIGATION_PROFILE } from '../navigations/routes';
import SwipeButton from 'rn-swipe-button';
import { connect } from 'react-redux';
import LinearGradient from "react-native-linear-gradient";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome, {this.props.dataSource.userName}</Text>
                <View style={styles.container}>
                    <SwipeButton
                        disabled={false}
                        swipeSuccessThreshold={70}
                        height={45}
                        width={330}
                        title="Swipe to Continue"
                        titleColor='#fff'
                        onSwipeSuccess={() => {
                            this.onGuestPress();
                        }}
                        thumbIconBackgroundColor="#000" //(Optional)
                        thumbIconBorderColor="#000" //(Optional)
                        railBackgroundColor="#004d40" //(Optional)
                        railBorderColor="#004d40" //(Optional)
                    />
                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={this.onGuestPress} >
                        <Text style={styles.appButtonText}> My Profile </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.appButtonContainer}
                        onPress={this.onGuestPress} >
                        <Text style={styles.appButtonText}> My Profile </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.onGuestPress} >
                        <LinearGradient
                            colors={["#004d40", "#009688"]}
                            style={styles.appButtonContainer}
                        >
                            <Text style={styles.appButtonText}> My Profile </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    onGuestPress = () => {
        this.props.navigation.navigate(NAVIGATION_PROFILE);
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    }, body: {
        padding: 20,
        backgroundColor: '#fff',
    }
    , appButtonContainer: {
        elevation: 8,
        marginTop: 50,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
   
    SubmitButtonStyle: {
        alignSelf: 'stretch',
        marginTop: 50,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#00BCD4',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonText: {
        color: "black",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    },
    welcomeText: {
        alignSelf: 'center',
        height: 30,
        color: '#000',
        fontSize: 18,
    }
});

const mapStateToProps = (state) => {
    const dataSource = state.LoginReducer.data
    return {
        dataSource
    }
}

export default connect(mapStateToProps, null)(Dashboard);
