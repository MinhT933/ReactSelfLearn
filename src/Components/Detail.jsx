import React, { Component } from 'react'
import './style/Detail.css'

export default class Detail extends Component {
    render() {
        return (
            <div class="container">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="container">
                            <div className="card">
                                <div className="row">
                                    <aside className="col-sm-5 border-right">
                                        <article className="gallery-wrap">
                                            <div className="img-big-wrap">
                                                <div> <a href="#"><img src="https://file.hstatic.net/1000135323/file/tra_sua_ngon_0e87236e4d7442fb826c502798ec6f7e_1024x1024.jpg" /></a></div>
                                            </div>
                                            <div className="img-small-wrap">
                                            </div>
                                        </article>
                                    </aside>
                                    <aside className="col-sm-7">
                                        <article className="card-body p-5">
                                            <h3 className="title mb-3" />
                                            <p className="price-detail-wrap">
                                                <span className="price h3 text-warning">
                                                    <span className="currency">US $</span><span className="num"></span>
                                                </span>
                                            </p>
                                            <dl className="item-property">
                                                <dt>Description</dt>
                                                <dd><p>
                                                </p></dd>
                                            </dl>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <dl className="param param-inline">
                                                        <dt>Quantity: </dt>
                                                        <dd>
                                                            <select className="form-control form-control-sm">
                                                                <option> 1 </option>
                                                                <option> 2 </option>
                                                                <option> 3 </option>
                                                            </select>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                            <hr />
                                            <a href="#" className="btn btn-lg btn-primary text-uppercase"> Buy now </a>
                                            <a href="#" className="btn btn-lg btn-outline-primary text-uppercase"> <i className="fas fa-shopping-cart" /> Add to cart </a>
                                        </article>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
