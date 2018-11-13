import React, {Component} from 'react';
import {Link} from "react-router-dom"

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {id:1,title:'1文章'},
                {id:2,title:'2文章'},
                {id:3,title:'3文章'},
                {id:4,title:'4文章'},
                {id:5,title:'5文章'}
            ]
        };
    }

    render() {
        return (
            <div>
                <h2>news</h2>
                {
                    this.state.list.map(item => ((
                        <Link to={`/newsDetail/${item.id}`} key={item.id}><div >{item.title}</div></Link>
                    )))
                }
            </div>
        )
    }
}

export default News