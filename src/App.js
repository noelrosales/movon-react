import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Notfound from './pages/404';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/destinations' component={Destinations} />
          <Route path='/terms' component={Terms} />
          <Route path='/privacy' component={Privacy} />
          <Route path='/faqs' component={Faq} />
          <Route path='/contact' component={Contact} />
          <Route component={Notfound} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
