import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: "column", }}>
                    <Text style={styles.welcomeText}>WELCOME, {this.props.dataSource.userName}</Text>
                    <View style={styles.containerBody}>
                        <Text style={styles.nativeText}>User Name: {this.props.dataSource.userName}</Text>
                        <Text style={styles.nativeText}>Device: {this.props.dataSource.device}</Text>
                    </View>
                </View>
            </View>
        ); l̥
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, containerBody: {
        flex: 1,
        margin: 20,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        alignSelf: 'center',
        height: 30,
        color: '#000',
        fontSize: 18,
    },
     nativeText: {
        alignSelf: 'center',
        height: 30,
        color: '#000',
        fontSize: 15,
    }
});


const mapStateToProps = (state) => {
    const dataSource = state.LoginReducer.data
    return {
        dataSource
    }
}

export default connect(mapStateToProps, null)(Profile);

