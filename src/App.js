import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import NoMatchRoute from './components/app/NoMatchRoute';
import ItemInfo from './components/search/ItemInfo';
import Auth from './pages/Auth/Auth';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>

                <Route path='/' exact>
                    <Home />
                </Route>

                <Route path='/search'>
                    <Search />
                </Route>

                <Route path='/details/:id'>
                    <ItemInfo />
                </Route>

                <Route path='/auth'>
                    <Auth />
                </Route>

                <Route path='*'>
                    <NoMatchRoute />
                </Route>

            </Switch>
        </Router>
    )
}

export default App;