import React from 'react'
import 'antd/dist/antd.css'
import {Input, Button, Row, Col, List} from 'antd'
import {connect} from 'react-redux'
import * as Actions from './store/actionCreators'

//无状态组件
const TodoList = (props) => {
    //结构赋值，代码更加优雅
    const {inputValue, list, handleInputChange, handleBtnClick, delectItem} = props;
    return (
        <div style={{marginTop: '10px', marginLeft: '10px', marginRight: '10px'}}>
            <Row>
                <Col span={18}>
                    <Input
                        placeholder="Todo Info"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </Col>
                <Col span={6}>
                    <Button
                        type="primary"
                        style={{marginLeft: '10px'}}
                        onClick={handleBtnClick}
                    >提交</Button>
                </Col>
            </Row>
            <Row>
                <Col span={18}>
                    <List
                        style={{marginTop: '10px'}}
                        bordered
                        dataSource={list}
                        renderItem={(item) => (
                            <List.Item onClick={() => delectItem(item)}>{item}</List.Item>
                        )}
                    />
                </Col>

            </Row>
        </div>
    )
}

/**
 * mapStateToProps
 * store的数据会映射到组件的props里面去
 * @param state
 * @returns {{inputValue: string|*, list: *}}
 */
const mapStateToProps = (state) => ({
    inputValue: state.inputValue,
    list: state.list
})

/**
 * store的方法挂载到props上
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            dispatch(Actions.getInputChangeAction(e.target.value));
        },
        handleBtnClick() {
            dispatch(Actions.getAddItemAction());
        },
        delectItem(value) {
            dispatch(Actions.getDelectItemAction(value));
        }
    }
}

/**
 * connect把映射关系和业务逻辑集成到了TodoList这个UI组件中
 * 对UI组件进行了包装，返回一个容器组件
 * 容器组件就是connect返回的结果
 * 使以 export default 返回一个容器组件
 * @param mapStateToProps连接规则
 * @param mapDispatchToProps props和dispatch做关联，达到修改store的目的。
 * @param TodoList和store做连接
 */
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);