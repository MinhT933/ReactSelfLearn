import React, { Component } from 'react'
import './Carosel.css';

export default class Carosel extends Component {
    render() {
        return (
            <div className ="carousel">
                <div id="carousel-example-1z" className="carousel slide carousel-fade pt-4" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-1z" data-slide-to={0} className="active" />
                        <li data-target="#carousel-example-1z" data-slide-to={1} />
                        <li data-target="#carousel-example-1z" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="view" style={{ backgroundImage: 'url("https://image2.tin247.com/pictures/2021/01/22/kco1611300851.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' ,height: '450px' }}>
                                <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
                                    <div className="text-center white-text mx-5 wow fadeIn">
                                        <h1 className="mb-4">
                                            <strong>Hot JAV idol</strong>
                                        </h1>
                                        <p>
                                            <strong>Search and find infor of Java Idol</strong>
                                        </p>
                                        <p className="mb-4 d-none d-md-block">
                                            <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and written versions
                                             available. Create your own, stunning website.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view" style={{ backgroundImage: 'url("https://i.pinimg.com/originals/9f/ca/6c/9fca6cc981cb52532eb990d141363c2c.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' ,height: '450px'}}>
                                <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
                                    <div className="text-center white-text mx-5 wow fadeIn">
                                        <h1 className="mb-4">
                                            <strong>Hot JAV idol</strong>
                                        </h1>
                                        <p>
                                            <strong>Search and find infor of Java Idol</strong>
                                        </p>
                                        <p className="mb-4 d-none d-md-block">
                                            <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and written versions
                                              available. Create your own, stunning website.</strong>
                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view" style={{ backgroundImage: 'url("https://i.pinimg.com/originals/d3/27/02/d32702385a8aba321075920004a18ff2.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',height: '450px' }}>
                                <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
                                    <div className="text-center white-text mx-5 wow fadeIn">
                                        <h1 className="mb-4">
                                            <strong>Hot JAV idol</strong>
                                        </h1>
                                        <p>
                                            <strong>Search and find infor of Java Idol</strong>
                                        </p>
                                        <p className="mb-4 d-none d-md-block">
                                            <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and written versions
                                              available. Create your own, stunning website.</strong>
                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        )
    }
}
