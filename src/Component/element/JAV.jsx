import React, { Component } from 'react'

export default class JAV extends Component {

    render() {
        // console.log(this.props.item);
        let {item,handleDetail} = this.props
        /// item là object///
        return (
            <div >
                <div className="card">
                    <img className="card-img-top" src ={this.props.item.img} height = "380px" alt />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.item.name}</h4>
                        <p className="card-text">{this.props.item.age}</p>
                        <a href="#" className="btn btn-info" role="button"  onClick={()=>{handleDetail(item)}} >See information Idol </a>
                    </div>
                </div>
            </div>

        )
    }
}
