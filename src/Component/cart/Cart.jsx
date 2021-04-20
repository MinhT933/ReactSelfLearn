import React, { Component } from 'react'

export default class cart extends Component {
   
    renderCart=()=>{
        
     return this.props.ArrayIdol.map((item)=>{
            return(
                <div className="layout-inline row">
                <div className="col col-pro layout-inline">
                    <img src={item.img} alt="kitten" height = "60px"  />
                    <p>{item.name}</p>
                </div>
                <div className="col col-price col-numeric align-center ">
                    <p>{item.age}</p>
                </div>
                <div className="col col-qty layout-inline">
                <button type="button" class="btn btn-primary">+</button>
                         <div>3</div>
                <button type="button" class="btn btn-primary">-</button>
                </div>
                <div className="col col-vat col-numeric">
                    <p>£2.95</p>
                </div>
                <div className="col col-total col-numeric">
                    <p>£182.95</p>
                </div>
            </div>
            )
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="heading">
                        <h1>
                            <span className="shopper">s</span> Shopping Cart
                        </h1>
                        <a href="#" className="visibility-cart transition is-open">X</a>
                    </div>
                    <div className="cart transition is-open">
                        <div className="table">                        
                            <div className="layout-inline row th">                              
                                <div className="col col-pro">Product</div>
                                <div className="col col-price align-center ">
                                    Price
                                </div>
                                <div className="col col-qty align-center">QTY</div>
                                <div className="col">VAT</div>
                                <div className="col">Total</div>
                            </div>
                            {this.renderCart()}
                      
                            <div className="tf">
                                
                                
                                <div className="row layout-inline">
                                    <div className="col">
                                        <p>Total</p>
                                    </div>
                                    <div className="col" />
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>

            </div>
        )
    }
}
