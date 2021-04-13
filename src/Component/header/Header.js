import React, {Component } from 'react'
import './Header.css'
export default class Header extends Component {
    render() {
        return (
            <div className="header" height= "40px" >
                <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
                    <div className="container">
                        <a className="navbar-brand waves-effect" href="https://mdbootstrap.com/docs/jquery/" target="_blank">
                            <strong className="blue-text">JAV</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link waves-effect" href="#">Home
                                       <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/" target="_blank">About MDB</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank">Download Film</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link waves-effect" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">Infor Idol</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav nav-flex-icons">
                                <li className="nav-item">
                                    <a className="nav-link waves-effect">
                                        <span className="badge red z-depth-1 mr-1"> 1 </span>
                                        <i className="fas fa-shopping-cart" />
                                        <span className="clearfix d-none d-sm-inline-block"> Cart </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
