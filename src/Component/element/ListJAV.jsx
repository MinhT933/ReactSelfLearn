import React, { Component } from 'react'
import img1 from '../../Carosel_JAV/img1.jpg';
import MiaNanasawa from '../../Carosel_JAV/MiaNanasawa.jpg';
import NoaMizuhara from '../../Carosel_JAV/NoaMizuhara.jpg';
import SaoriWatanabe from '../../Carosel_JAV/SaoriWatanabe-p1.jpg';
import YuaMikami from '../../Carosel_JAV/YuaMikami.jpg';
import SerinaHayakawa from '../../Carosel_JAV/SerinaHayakawa.jpg';
import JAV from './JAV';
import DetailIdol from '../detailIdol/DetailIdol';
import Cart from '../cart/Cart';
const list = [
    {
        name: 'emi fukuda',
        age: 21,
        img: img1,
        id: 1
    },
    {
        name: 'Mia Nanasawa',
        age: 22,
        img: MiaNanasawa,
        id: 2
    },
    {
        name: 'Noa Mizuhara',
        age: 23,
        img: NoaMizuhara,
        id : 3

    },
    {
        name: 'Saori Watanabe',
        age: 23,
        img: SaoriWatanabe,
        id: 4
    },
    {
        name: 'Yua Mikami',
        age: 23,
        img: YuaMikami,
        id: 5
    },
    {
        name: 'Serina Hayakawa',
        age: 23,
        img: SerinaHayakawa,
        id: 6
    }
]
export default class ListJAV extends Component {
    state = {
        model: null,
        ArrayIdol:[]
    }
    handleDetail = (idol) => {
        // console.log(idol);
        if(idol){
            this.setState({model: idol})
        } 
        
       
    }
    findIndexIdol = (id)=>{
         return this.state.ArrayIdol.findIndex((item)=>{
                 return item.id ===id 
         })
         }
    
    addCartIdol=(idol)=>{
        // console.log(idol);
        const newidol={
            name: idol.name,
            age: idol.age,
            img: idol.img,
            id: idol.id,
            countNumIdol:1
        }
        let arrCart1=[...this.state.ArrayIdol]
        const index = this.findIndexIdol(newidol.id)
        if(index===-1){
            arrCart1.push(newidol)
        }else{
            arrCart1[index].countNumIdol+=1;
        }

       
        this.setState({ArrayIdol: arrCart1}, ()=>{
            console.log(this.state.ArrayIdol);
            
        })

        
    }
    minusCartIdol=(idol)=>{
        // console.log(idol);
        const newidol={
            name: idol.name,
            age: idol.age,
            img: idol.img,
            id: idol.id,
            countNumIdol:1
        }
        let arrCart1=[...this.state.ArrayIdol]
        const index = this.findIndexIdol(newidol.id)
        if(index === -1){
            // arrCart1.remove(newidol)
           arrCart1.splice(newidol,1)
        }else{
            arrCart1[index].countNumIdol-=1;
            if(arrCart1[index].countNumIdol===0){
                arrCart1.splice(newidol,1)
            }
        }

       
        this.setState({ArrayIdol: arrCart1}, ()=>{
            console.log(this.state.ArrayIdol);
            
        })

        
    }
   

    renderJAV = () => {
        return list.map((item) => {
            return (
                <div className="col-4">
                    <JAV item={item}  handleDetail={this.handleDetail} addCartIdol= {this.addCartIdol}/>
                </div>
            )
        })
    } 
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.renderJAV()}
                        {this.state.model==null ? '': <DetailIdol model= {this.state.model}  addCartIdol= {this.addCartIdol}/>}
                        {this.state.ArrayIdol==0? '':<Cart ArrayIdol= {this.state.ArrayIdol} model= {this.state.model} addCartIdol= {this.addCartIdol} minusCartIdol= {this.minusCartIdol}/>}
                        
                    </div>
                </div> 
            </div>
        )
    }
   
}
