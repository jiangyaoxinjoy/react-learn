import React, {Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {item,test} = this.props;
        return (
            <div className="wrap">
                <li onClick={ () => this.handleClick() } >{test} - {item}</li>
            </div>
        )
    }

    handleClick() {
        //结构赋值
        const {delectItem,index} = this.props;
        delectItem(index);
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    item: PropTypes.string,
    delectItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: '默认值'
}

export default TodoItem