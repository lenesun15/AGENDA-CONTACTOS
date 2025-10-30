import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ContactDetail from './pages/ContactDetail';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contacts" exact component={ContactList} />
          <Route path="/contacts/new" component={ContactForm} />
          <Route path="/contacts/:id" component={ContactDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;