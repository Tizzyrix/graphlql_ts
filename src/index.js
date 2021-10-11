import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const theme = {
  colors: {
    primary: 'green',
  },
};

const Global = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    border: 0;
  }

`;

render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);
