import React, {Component} from 'react';
import url from 'url'

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query:""
        };
    }

    render() {
        return (
            <div>
                ProductDetail {this.state.query}
            </div>
        )
    }

    componentDidMount() {
        //true 返回的是对象，方便取值。
        const query = url.parse(this.props.location.search,true).query;
        this.setState({
            query:query.pid
        })
    }
}

export default ProductDetail