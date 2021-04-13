import React, { Component } from 'react'
import '../footer/Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <div>
                <div >
                    <footer className="page-footer text-center font-small mt-4 wow fadeIn">
                        <div>
                            <hr className="my-4" />
                            <div className="pb-4">
                                <a href="https://www.facebook.com/mdbootstrap" target="_blank">
                                    <i className="fab fa-facebook-f mr-3" />
                                </a>
                                <a href="https://twitter.com/MDBootstrap" target="_blank">
                                    <i className="fab fa-twitter mr-3" />
                                </a>
                                <a href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4" target="_blank">
                                    <i className="fab fa-youtube mr-3" />
                                </a>
                                <a href="https://plus.google.com/u/0/b/107863090883699620484" target="_blank">
                                    <i className="fab fa-google-plus-g mr-3" />
                                </a>
                                <a href="https://dribbble.com/mdbootstrap" target="_blank">
                                    <i className="fab fa-dribbble mr-3" />
                                </a>
                                <a href="https://pinterest.com/mdbootstrap" target="_blank">
                                    <i className="fab fa-pinterest mr-3" />
                                </a>
                                <a href="https://github.com/mdbootstrap/bootstrap-material-design" target="_blank">
                                    <i className="fab fa-github mr-3" />
                                </a>
                                <a href="http://codepen.io/mdbootstrap/" target="_blank">
                                    <i className="fab fa-codepen mr-3" />
                                </a>
                            </div>
                            <div className="footer-copyright py-3">
                                © MinhT
                                <a href="phammanhtoanhht933@gmail.com" target="_blank"> phammanhtoanhht933@gmail.com</a>
                            </div>
                        </div>

                    </footer>
                </div>
            </div>
        )
    }
}
