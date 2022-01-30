import React from 'react';
import Navbar from './components/Navbar';
import './assets/css/style.css';
import Index from "./components";
import Footer from "./components/Footer";
import {BrowserRouter, Route} from 'react-router-dom';
import Services from "./components/Services";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";
import List from "./components/List";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";

function App() {
    return (
        <div>
            <Navbar/>

            <BrowserRouter>
                <Route exact path="/" component={Index}/>
                <Route path="/services" component = {Services}/>
                <Route path="/register" component = {Register}/>
                <Route path= "/list" component = {List}/>
                <Route path= "/aboutus" component = {AboutUs}/>
                <Route path= "/contactus" component = {ContactUs}/>
                <Route path="/login" component={Login} />
            </BrowserRouter>


            <Footer/>
        </div>
    );
}

export default App;
