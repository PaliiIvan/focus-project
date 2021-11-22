import './App.css';
import { HomePage } from './pages/home/home.page';
import { ContactPage } from './pages/contact/contact.page';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AboutPage } from './pages/support/about.page';
import { LoginPage } from './pages/login/login.page';
import { Navigation, Background } from './components';
function App() {
  return (
    <Router>
      <div>
        <Background />
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          <Route exact path="/contact">
            <ContactPage></ContactPage>
          </Route>

          <Route exact path="/about">
            <AboutPage></AboutPage>
          </Route>

          <Route exact path="/login">
            <LoginPage></LoginPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
