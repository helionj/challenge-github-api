import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import ProfileSearch from 'pages/ProfileSearch';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () =>{
    return(
        <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/profilesearch">
            <ProfileSearch />
          </Route>
        </Switch>
      </BrowserRouter>
    );
}

export default Routes;