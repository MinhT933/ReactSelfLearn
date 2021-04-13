import React, { Component } from 'react'

export default class element extends Component {
    
    render() {
        let {mode}= this.props
        console.log(this.props.mode);
        return (
            <div>
                <section className="text-center mb-4">
                    <div className="row wow fadeIn">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" className="card-img-top" alt />
                                    <a>
                                        <div className="mask rgba-white-slight" />
                                    </a>
                                </div>
                                <div className="card-body text-center">
                                    <a href className="grey-text">
                                        <h5>Shirt</h5>
                                    </a>
                                    <h5>
                                        <strong>
                                            <a href className="dark-grey-text">Denim shirt
                                               <span className="badge badge-pill danger-color">NEW</span>
                                            </a>
                                        </strong>
                                    </h5>
                                    <h4 className="font-weight-bold blue-text">
                                        <strong>120$</strong>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div></section>
            </div>

        )
    }
}
