import React, { Component } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

export default class DetailIdol extends Component {
    render() {
        let{model,addCartIdol}= this.props
        return (
            <div>
                <main className="mt-5 pt-4">
                    <div className="container dark-grey-text mt-5">
                        <div className="row wow fadeIn">
                            <div className="col-md-6 mb-4">
                                <img src={model.img} className="img-fluid" alt />
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="p-4">
                                    <div className="mb-3">
                                        <a href>
                                            <span className="badge purple mr-1">{model.name}</span>
                                        </a>
                                        <a href>
                                            <span className="badge blue mr-1">hot</span>
                                        </a>
                                        <a href>
                                            <span className="badge red mr-1">{model.age}</span>
                                        </a>
                                    </div>
                                    <p className="lead">
                                        <span className="mr-1">
                                            <del>$200</del>
                                        </span>
                                        <span>$100</span>
                                    </p>
                                    <p className="lead font-weight-bold">Description</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa
                                    sint voluptatibus!
                                    Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia sapiente.</p>
                                    <form className="d-flex justify-content-left">
                                        <input type="number" defaultValue={1} aria-label="Search" className="form-control" style={{ width: 100 }} />
                                        <button className="btn btn-primary btn-md my-0 p" type="submit" onClick={()=>{addCartIdol(model)}}>Add to cart
                                            <i className="fas fa-shopping-cart ml-1" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div></main>


                
            </div>

        )
    }
}
