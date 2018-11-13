import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {id:1,title:'1商品'},
                {id:2,title:'2商品'},
                {id:3,title:'3商品'},
                {id:4,title:'4商品'},
                {id:5,title:'5商品'}
            ]
        };
    }

    render() {
        return (
            <div>
                <h2>product</h2>
                {
                    this.state.list.map(item => ((
                        <Link to={`/productDetail?pid=${item.id}`} key={item.id}><div >{item.title}</div></Link>
                    )))
                }
            </div>
        )
    }
}

export default Product