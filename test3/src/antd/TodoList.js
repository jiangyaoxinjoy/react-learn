import React, {Component} from 'react';
import {Input, Button, Row, Col, List} from 'antd';
import store from '../store/index';
import * as Actions from '../store/actionCreators';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <div>
                <div style={{marginTop: '10px', marginLeft: '10px', marginRight: '10px'}}>
                    <Row>
                        <Col span={18}>
                            <Input
                                placeholder="Todo Info"
                                value={this.state.inputValue}
                                onChange={(e) => this.hadleInputChange(e)}
                            />
                        </Col>
                        <Col span={6}>
                            <Button
                                type="primary"
                                style={{marginLeft: '10px'}}
                                onClick={() => this.handleBtnClick()}
                            >提交</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={18}>
                            <List
                                style={{marginTop: '10px'}}
                                bordered
                                dataSource={this.state.list}
                                renderItem={item => (
                                    <List.Item onClick={() => this.delectItem(item)}>{item}</List.Item>)}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

    hadleInputChange(e) {
        const action = Actions.getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleBtnClick() {
        const action = Actions.getAddItemAction();
        store.dispatch(action);
    }

    delectItem(item) {
        console.log(item);
        const action = Actions.getDelectItemAction(item);
        store.dispatch(action);
    }
}

export default TodoList