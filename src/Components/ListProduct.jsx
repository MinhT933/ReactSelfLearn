import React, { Component } from 'react'
import trahoacuc from '../img_TraSua/trahoacuc.jpg';
import gongcha from '../img_TraSua/gongcha.jpg';
import tocotoco from '../img_TraSua/tocotoco.jpg';
import tradao from '../img_TraSua/tradao.jpg';
import matcha from '../img_TraSua/matcha.jpg';
import trakiwi from '../img_TraSua/trakiwi.jpg';
import Element from './Element';
import Cart from './Cart';
const data = [
    { name: 'trahoacuc', price: '65.000', img: trahoacuc, id: 1 },
    { name: 'gongcha', price: '65.000', img: gongcha, id: 2 },
    { name: 'tocotoco', price: '65.000', img: tocotoco, id: 3 },
    { name: 'tradao', price: '65.000', img: tradao, id: 4 },
    { name: 'matcha', price: '65.000', img: matcha, id: 5 },
    { name: 'trakiwi', price: '65.000', img: trakiwi, id: 6 }



]

export default class ListProduct extends Component {
    state = {
        item: null,
        arrayPro:[]
    }


    findID = (id) => {
        return this.state.arrayPro.findIndex((item) => {
            return item.id === id
        })
    }
    AddtoCard = (data) => {

        const newProduct = {
            name: data.name,
            img: data.img,
            price: data.price,
            id: data.id,
            count: 1

        }

        let arr1 = [...this.state.arrayPro]
        const index = this.findID(newProduct.id)
        if (index === -1) {
            arr1.push(newProduct)

        } else {
            arr1[index].count += 1;

        }
        this.setState({ arrayPro: arr1 }, () => {
            console.log(this.state.arrayPro);

        })
    }
    minustoCard = (data) => {

        const newProduct = {
            name: data.name,
            img: data.img,
            price: data.price,
            id: data.id,
            count: 1

        }

        let arr1 = [...this.state.arrayPro]
        const index = this.findID(newProduct.id)
        if (index === -1) {
            arr1.push(newProduct)

        } else {
            arr1[index].count -= 1;
            if(arr1[index].count===0){
                arr1.splice(newProduct)
            }

        }
        this.setState({ arrayPro: arr1 }, () => {
            console.log(this.state.arrayPro);

        })
    }
    deletetoCard = (data) => {

        const newProduct = {
            name: data.name,
            img: data.img,
            price: data.price,
            id: data.id,
            count: 1

        }

        let arr1 = [...this.state.arrayPro]
        const index = this.findID(newProduct.id)
        if (index === 0) {
            arr1.splice(newProduct,1)

        } 
        
        this.setState({ arrayPro: arr1 }, () => {
            console.log(this.state.arrayPro);

        })
    }
    renderProduc = () => {

        return data.map((item) => {
            return (

                <div >
                    <Element item={item} AddtoCard={this.AddtoCard} />
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    {this.renderProduc()}
                    <Cart arrayPro={this.state.arrayPro} item={this.state.item} AddtoCard={this.AddtoCard} minustoCard={this.minustoCard} deletetoCard={this.deletetoCard}/>
                </div>
            </div>
        )
    }
}
