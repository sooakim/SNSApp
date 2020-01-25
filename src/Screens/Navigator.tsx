import React from 'react';
import { Image } from 'react-native';

import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CheckLogin from '~/Screens/CheckLogin';
import Login from '~/Screens/Login';
import PasswordReset from '~/Screens/PasswordReset';
import Signup from '~/Screens/Signup';

import MyFeed from '~/Screens/MyFeed';
import Feeds from '~/Screens/Feeds';
import FeedListOnly from '~/Screens/FeedListOnly';
import Upload from '~/Screens/Upload';
import Notification from '~/Screens/Notification';
import Profile from '~/Screens/Profile';
import Drawer from '~/Screens/Drawer';

const LoginNavigator = createStackNavigator({
    Login,
    Signup,
    PasswordReset,
}, {
    initialRouteName: 'Login',
});

const MyFeedTab = createStackNavigator({
    MyFeed,
}, {
    initialRouteName: 'MyFeed'
});

const FeedsTab = createStackNavigator({
    Feeds,
    FeedListOnly,
}, {
    initialRouteName: 'Feeds'
});

const UploadTab = createStackNavigator({
    Upload,
}, {
    initialRouteName: 'Upload' 
});

const ProfileTab = createStackNavigator({
    Profile,
}, {
    initialRouteName: 'Profile'
});

interface ITabIcon{
    focused: boolean;
}

const MainTabs = createBottomTabNavigator({
    MyFeed: {
        screen: MyFeedTab,
        navigationOptions: {
            tabBarIcon: ({ focused }: ITabIcon) => (
                <Image
                    source={
                        focused 
                            ? require('~/Assets/Images/Tabs/ic_home.png')
                            : require('~/Assets/Images/Tabs/ic_home_outline.png')
                    }
                />
            ),
        },
    },
    Feeds: {
        screen: FeedsTab,
        navigationOptions: {
            tabBarIcon: ({ focused }: ITabIcon) => (
                <Image
                    source={
                        focused 
                            ? require('~/Assets/Images/Tabs/ic_search.png')
                            : require('~/Assets/Images/Tabs/ic_search_outline.png')
                    }
                />
            ),
        },
    },
    Upload: {
        screen: UploadTab,
        navigationOptions: {
            tabBarIcon: ({ focused }: ITabIcon) => (
                <Image
                    source={
                        focused 
                            ? require('~/Assets/Images/Tabs/ic_add.png')
                            : require('~/Assets/Images/Tabs/ic_add_outline.png')
                    }
                />
            ),
        },
    },
    Notification: {
        screen: Notification,
        navigationOptions: {
            tabBarIcon: ({ focused }: ITabIcon) => (
                <Image
                    source={
                        focused 
                            ? require('~/Assets/Images/Tabs/ic_favorite.png')
                            : require('~/Assets/Images/Tabs/ic_favorite_outline.png')
                    }
                />
            ),
        },
    },
    Profile: {
        screen: ProfileTab,
        navigationOptions: {
            tabBarIcon: ({ focused }: ITabIcon) => (
                <Image
                    source={
                        focused 
                            ? require('~/Assets/Images/Tabs/ic_profile.png')
                            : require('~/Assets/Images/Tabs/ic_profile_outline.png')
                    }
                />
            ),
        },
    },
}, {
    tabBarOptions: {
        showLabel: false,
    },
});

const MainNavigator = createDrawerNavigator({ 
    MainTabs,
}, {
    drawerPosition: 'right',
    drawerType: 'slide',
    contentComponent: Drawer,
});

const AppNavigator = createSwitchNavigator({
    CheckLogin,
    LoginNavigator,
    MainNavigator,
}, {
    initialRouteName: 'CheckLogin',
})

export default createAppContainer(AppNavigator);