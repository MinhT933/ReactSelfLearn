import React, { Component } from 'react'
import Header from './header/Header'
import Carosel from './carosel/Carosel'
import Navbar from './navbar/Navbar'
import ListJAV from './element/ListJAV'
import Footer from './footer/Footer'
export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <Header/>
                <Carosel/>
                <Navbar/>
                <ListJAV/>
                <Footer/>  
            </div>
        )
    }
}
