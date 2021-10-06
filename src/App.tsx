import  React, {FC} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ROUTES} from './const/routes'

import Header from './components/Header';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import NoMatchRoute from './pages/noMatchRoute/NoMatchRoute';
import ItemInfo from './pages/itemInfo/ItemInfo';
import Auth from './pages/auth/Auth';

const App: FC = () => {
    return (
        <Router>
            <Header />
            <Switch>
            
                <Route path={`${ROUTES.home}`} exact>
                    <Home />
                </Route>

                <Route path={`${ROUTES.search}`}>
                    <Search />
                </Route>

                <Route path={`${ROUTES.itemInfo}`}>
                    <ItemInfo />
                </Route>

                <Route path={`${ROUTES.auth}`}>
                    <Auth />
                </Route>

                <Route path={`${ROUTES.any}`}>
                    <NoMatchRoute />
                </Route>

            </Switch>
        </Router>
    )
}

export default App;