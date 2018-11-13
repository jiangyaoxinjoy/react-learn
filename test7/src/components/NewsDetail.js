import React, {Component} from 'react';

class NewsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                news detail {this.props.match.params.id}
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
    }
}

export default NewsDetail