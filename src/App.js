import React from 'react';

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import data from "./data";


function App() {
    return (
        <div className="App">
            <Header data={data.main}/>
            <About data={data.main}/>
            <Portfolio data={data.portfolio}/>
            <Contact data={data.main}/>
            <Footer data={data.main}/>
        </div>
    );
}


export default App;
