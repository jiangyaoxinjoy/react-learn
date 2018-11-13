import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {WriterWrapper,
    WriterHeader,
    WriterItem,
    WriterBtn
} from "../style";

class Writer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {list} = this.props;
        return (
            <WriterWrapper>
                <WriterHeader>
                    <div>
                        推荐作者
                        <span>
                            <i className='iconfont'>&#xe851;</i>
                            换一批
                        </span>
                    </div>
                </WriterHeader>
                {
                    list.map( item => ((
                        <WriterItem key={item.get('id')}>
                            <img src={item.get("imgUrl")} alt=""/>
                            <div className='desc'>
                                <p className='name'>{item.get('name')}</p>
                                <p className='desc'>{item.get('desc')}</p>
                            </div>
                            <div className='follow'>
                                <i className='iconfont'>&#xe632;</i>关注
                            </div>
                        </WriterItem>
                    )))
                }


                <WriterBtn>查看全部 > </WriterBtn>
            </WriterWrapper>
        )
    }
};

const mapState = (state) => ({
    list:state.getIn(['home','writerList'])
})
export default connect(mapState,null)(Writer)