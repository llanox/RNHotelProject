import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Store from './App/Store'; //Import the store
import AppNavigation from './App/Navigation/AppNavigation'

export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <AppNavigation />
            </Provider>
        );
    }
}