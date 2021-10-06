import React from "react";
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './redux/index'
import App from './App';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache(),
    connectToDevTools: true,
})

render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Provider>,
    document.getElementById('root')
);
