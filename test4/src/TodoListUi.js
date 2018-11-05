import React from 'react';
import {Input, Button, Row, Col, List} from 'antd';
const TodoListUi = (props) => {
    return (
        <div style={{marginTop: '10px', marginLeft: '10px', marginRight: '10px'}}>
            <Row>
                <Col span={18}>
                    <Input
                        placeholder="Todo Info"
                        value={props.inputValue}
                        onChange={props.hadleInputChange}
                    />
                </Col>
                <Col span={6}>
                    <Button
                        type="primary"
                        style={{marginLeft: '10px'}}
                        onClick={props.handleBtnClick}
                    >提交</Button>
                </Col>
            </Row>
            <Row>
                <Col span={18}>
                    <List
                        style={{marginTop:'10px'}}
                        bordered
                        dataSource={props.list}
                        renderItem={item => (<List.Item onClick={() => {props.delectItem(item)}}>{item}</List.Item>)}
                    />
                </Col>
            </Row>
        </div>
    )
}

// class TodoListUi extends Component {
//     render() {
//         return (
//
//         )
//     }
// }

export default TodoListUi