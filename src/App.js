import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Home from './components/Home/home';
import Course from './components/Course/course';
const App = () => {
  return ( 
    <div>
      <BrowserRouter>
      <Header />

      <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/Course/:slug" component={Course} />
         <Route component={()=> <h1>404 page not found</h1> } />

      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
   );
}
 
export default App;