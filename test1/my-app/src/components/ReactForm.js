import React, {Component, Fragment} from 'react';

class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            sex: "1",
            citys: [{name: "北京", id: 1}, {name: "上海", id: 2}, {name: "深圳", id: 3}],
            hobby: [
                {
                    title: "睡觉",
                    "checked": false
                },
                {
                    title: "游戏",
                    "checked": false
                },
                {
                    title: "看电视",
                    "checked": false
                }
            ],
            info: "",
            city: 1,
        };
    }

    render() {
        return (
            <div className="wrap">
                <h2>React表单</h2>
                <p>表单一般写在form里面。单页面也可以不用form。</p>
                <p>如果用了form，就一定要阻止表单的默认提交行为</p>
                <form action="">
                    用户名：<input type="text" placeholder="name" value={this.state.name} onChange={this.changeName}/>
                    性别：
                    <input type="radio" value="1" checked={this.state.sex === '1'} onChange={this.changeSex}/><i>男</i>
                    <input type="radio" value="2" checked={this.state.sex === '2'} onChange={this.changeSex}/><i>女</i>
                    <br/>
                    居住城市：
                    <select value={this.state.city} onChange={this.changeSelect}>
                        {
                            this.state.citys.map(item => ((
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )))
                        }
                    </select>
                    <br/>
                    爱好：
                    {
                        this.state.hobby.map(item => ((
                            <Fragment key={item.title}>
                                <input type="checkbox" value={item.title} checked={item.checked}
                                       onChange={() => this.changeCheckbox(item)}/>
                                <i>{item.title}</i>
                            </Fragment>
                        )))
                    }
                    <textarea value={this.state.info} onChange={this.changeTextarea} cols="30" rows="10"
                              placeholder="备注"></textarea>
                    <input type="submit" defaultValue='提交' onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }

    changeName = (e) => {
        const val = e.target.value;
        this.setState({
            name: val
        })
    };
    changeSex = (e) => {
        const val = e.target.value;
        this.setState({
            sex: val
        })
    };
    changeSelect = (e) => {
        const val = e.target.value;
        this.setState({
            city: val
        })
    };

    changeCheckbox(item) {
        const newHobby = this.state.hobby;
        const temp = newHobby.map(val => {
            if (val === item) {
                val.checked = !val.checked;
            }
            return val;
        });
        this.setState(() => (({
            hobby: temp
        })))
    }

    changeTextarea = (e) => {
        const val = e.target.value;
        this.setState({
            info: val
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
}

export default ReactForm