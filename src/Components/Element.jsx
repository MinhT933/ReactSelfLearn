import React, { Component } from 'react'

export default class Element extends Component {
    render() {
        let {item,AddtoCard}= this.props
        return (
            <div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-8 col-md-2 col-lg-5">
                                <div className="card">
                                    <img className="card-img-top" src={item.img} alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title show_txt"><a href="//#endregion" title="View Product" />{item.name}</h4>
                                        <div className="row">
                                            <div className="col">
                                                <p className="btn btn-danger btn-block">{item.price}đ</p>
                                            </div>
                                            <div className="col">
                                                <button name="" value="" type="" className="btn btn-success" onClick={()=>{AddtoCard(item)}}>
                                                    Add To Cart
                                                </button>
                                                <input type="hidden" name="id" defaultValue />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
