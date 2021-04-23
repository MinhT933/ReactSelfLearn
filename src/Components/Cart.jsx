import React, { Component } from 'react'

export default class Cart extends Component {  
    rederCart = () => {
        return this.props.arrayPro.map((item) => {
            return (
                <div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col" className="border-0 bg-light">
                                        <div className="p-2 px-3 text-uppercase">Sản Phẩm</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                        <div className="py-2 text-uppercase">Đơn Giá</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                        <div className="py-2 text-uppercase">Số Lượng</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                        <div className="py-2 text-uppercase">Xóa</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <div className="p-2">
                                            <img src={item.img} className="img-fluid rounded shadow-sm"  width="300px"/>
                                            <div className="ml-3 d-inline-block align-middle">
                                                <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block">{item.name}</a></h5><span className="text-muted font-weight-normal font-italic" />
                                            </div>
                                        </div>
                                    </th>
                                    <td className="align-middle"><strong>{item.price}</strong></td>
                                    <td className="align-middle">
                                        <a href="#"><button className="btnSub" onClick={()=>{this.props.minustoCard(item)}}>-</button></a>
                                        <strong>{item.count}</strong>
                                        <a href="#"><button className="btnAdd" onClick={()=>{this.props.AddtoCard(item)}}>+</button></a>
                                    </td>
                                    <td className="align-middle"><a href="#" className="text-dark">
                                    </a><button type="button" className="btn btn-danger"onClick={()=>{this.props.deletetoCard(item)}}><a href="" className="text-dark" /><a href="#" >Delete</a></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            )
        })
    }
    render() {
        return(
            <div>
                {this.rederCart()}
            </div>
        )

    }
}

