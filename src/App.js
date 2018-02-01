import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import { BrowserRouter  as Router, Route, Switch} from 'react-router-dom';
import AboutPage from "./containers/AboutPage";
import Home from "./containers/HomePage";
import ReactJsPage from './containers/ReactJsPage';
import AngualarJsPage from './containers/AngualarJsPage';
import JavaScriptPage from './containers/JavaScriptPage';
import ContactPage from './containers/ContactPage';
import NotFoundPage from './containers/NotFoundPage';
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <Router>
      <div className="container-fluid">
        <Header />
        <div className="container">{this.showRoute(routes)}</div>
        <Footer/>
	    </div>
      
      </Router>
    );
  }
  showRoute = route =>{
    var result = null;
    if(route.length > 0){
      result = route.map((route , index)=>{
        return <Route 
          path = {route.path}
          exact = {route.exact}
          key ={index}
          component = {route.main}
        />
      })
    }
    return<Switch>{result}</Switch>;
  }
}

export default App;
