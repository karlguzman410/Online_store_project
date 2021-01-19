import React from 'react'
import Footer from './components/Footer';
import Header from "./components/Header";
import { Switch, Route } from 'react-router-dom'
import Photos from './pages/Photos';
import Cart from './pages/Cart';
import ContactMe from './pages/ContactMe';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
