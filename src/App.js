import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, message} from 'antd'

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <Button type="primary" onClick={() => {
                        message.info("我是大黄蜂")
                    }}>我是按钮</Button>
                </header>
            </div>);
    }

    componentDidMount() {
        message.info(" 组建加载成功");
    }
}

export default App;
