import React, { Component } from 'react';
import { Animated, Easing, Platform, View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawerMenu from './Component/CustomDrawerMenu';
import Global from './Global';

//Auth
import AuthLoading from './Auth/AuthLoading';
import SelectUser from './Auth/SelectUser';
import Login from './Auth/Login';
import Register from './Auth/Register';

//Screen
import Home from './Screen/Home';
import UplodFiles from './Screen/UplodFiles';
import FileSaved from './Screen/FileSaved';
import PhotoGallery from './Screen/PhotoGallery';

const AppStack = createStackNavigator({ UplodFiles, FileSaved, PhotoGallery, Home }, { headerMode: 'none' });
const AuthStack = createStackNavigator({ SelectUser, Login, Register }, { headerMode: 'none' });

const MyDrawerNavigator = createDrawerNavigator({
    AppStack
},
    {
        drawerWidth: '80%',
        contentOptions: {
        },
        contentComponent: (props) => <CustomDrawerMenu props={props} />
    }
);

// export default createAppContainer(
//     createSwitchNavigator(
//         {
//             AuthLoading: AuthLoading,
//             App: MyDrawerNavigator,
//             Auth: AuthStack,
//         },
//         {
//             initialRouteName: 'AuthLoading',
//         }
//     )
// );
const App = createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoading,
            App: MyDrawerNavigator,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);

export default class Route extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: true,
            user_id: '',
            username: '',
        };
        Global.main = this;
    }

    render() {
        return (
            <App />
        );
    }
}
