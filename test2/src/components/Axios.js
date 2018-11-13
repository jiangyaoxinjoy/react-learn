import React, {Component} from 'react';
import axios from 'axios'

class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <hr/>
                <h2>axios获取服务器数据</h2>
                <button onClick={this.getData}>获取服务器数据</button>
            </div>
        )
    }
    getData = () => {
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        axios.get(api)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }
}

export default Axios