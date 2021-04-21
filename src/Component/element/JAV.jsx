import React, { Component } from 'react'

export default class JAV extends Component {

    render() {
        // console.log(this.props.item);
        let {item,handleDetail,addCartIdol} = this.props
        /// item là object///
        return (
            <div >
                <div className="card">
                    <img className="card-img-top" src ={this.props.item.img} height = "380px" alt />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.item.name}</h4>
                        <p className="card-text">{this.props.item.age}</p>
                        <div>
                        <a href="#" className="btn btn-info" role="button"  onClick={()=>{handleDetail(item)}} >See Idol </a>
                        <a href="#" className="btn btn-info" role="button" onClick={()=>{addCartIdol(item)}} >Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
