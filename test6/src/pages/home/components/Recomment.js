import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    BoardItem,
    BoardWrapper
} from "../style";

class Recomment extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {list} = this.props;
        return (
            <BoardWrapper>
                {
                    list.map(item => ((
                        <BoardItem
                            href={item.get('href')}
                            key={item.get('id')}
                            imgUrl={item.get('imgUrl')}
                        >
                        </BoardItem>
                    )))
                }
            </BoardWrapper>
        )
    }
}

const mapState = state => ({
    list: state.getIn(['home','recommentList'])
})
export default connect(mapState,null)(Recomment)