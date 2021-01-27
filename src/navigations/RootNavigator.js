import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
    NAVIGATION_LOGIN_SCREEN,
    NAVIGATION_DASHBOARD,
    NAVIGATION_PROFILE
} from './routes';

import LoginPage from '../components/LoginPage';
import Dashboard from '../components/Dashboard';
import  Profile from '../components/Profile';

const Stack = {
    [NAVIGATION_LOGIN_SCREEN]: LoginPage,
    [NAVIGATION_DASHBOARD]: Dashboard,
    [NAVIGATION_PROFILE]: Profile
};

const DrawRoutes =
{
    NAVIGATION_HOME_PATH: {
        name: NAVIGATION_LOGIN_SCREEN,
        screen: createStackNavigator(Stack, { initialRouteName: NAVIGATION_LOGIN_SCREEN })
    }
};

export const RootNavigator =
    createStackNavigator({

        ...Stack,

    },
        {
            headerMode: 'none',
        },


    );

export default createAppContainer(RootNavigator);

