import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
    Alert,
    Linking,
    Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../Privet';
import Global from '../Global';

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: true,
            user_id: '',
            username: '',
        }
        // Global.main = this;
    }

    async componentDidMount() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const user_id = await AsyncStorage.getItem('user_id');
        const username = await AsyncStorage.getItem('username');

        await Global.main.setState({ user_id, username });

        await this.props.navigation.navigate(user_id ? 'App' : 'SelectUser');
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
            </View>
        );
    }
}
