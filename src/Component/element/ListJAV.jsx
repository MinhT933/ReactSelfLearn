import React, { Component } from 'react'
import img1 from '../../Carosel_JAV/img1.jpg';
import MiaNanasawa from '../../Carosel_JAV/MiaNanasawa.jpg';
import NoaMizuhara from '../../Carosel_JAV/NoaMizuhara.jpg';
import SaoriWatanabe from '../../Carosel_JAV/SaoriWatanabe-p1.jpg';
import YuaMikami from '../../Carosel_JAV/YuaMikami.jpg';
import SerinaHayakawa from '../../Carosel_JAV/SerinaHayakawa.jpg';
import JAV from './JAV';

export default class ListJAV extends Component {
    listJAV = [
        {
            name: 'emi fukuda',
            age: 21,
            img: img1


        },
        {
            name: 'Mia Nanasawa',
            age: 22,
            img: MiaNanasawa


        },
        {
            name: 'Noa Mizuhara',
            age: 23,
            img: NoaMizuhara


        },
        {
            name: 'Saori Watanabe',
            age: 23,
            img: SaoriWatanabe


        },
        {
            name: 'Yua Mikami',
            age: 23,
            img: YuaMikami


        },
        {
            name: 'Serina Hayakawa',
            age: 23,
            img: SerinaHayakawa


        }

    ]
    renderJAV = () => {
        // let {handleDetail, data , addCart} = this.props

        return this.listJAV.map((item) => {
            return (

                <div className="col-4">
                    <JAV item={item} />
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {/* <JAV/> */}
                <div className="container">
                    <div className="row">
                        {this.renderJAV()}
                    </div>
                </div>

            </div>
        )
    }
}
