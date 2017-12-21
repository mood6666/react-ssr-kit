import React, { Component } from 'react'
import Button from 'antd/lib/button';
import ButtonStyle from 'antd/lib/button/style/index.css';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import superagent from 'superagent'

class App extends Component{
    static fetch (state, dispatch, cookie) {
        return superagent.get('http://checkdev.dz11.com/apps/bulletCurtain/toCheck').withCredentials().set({
            cookie,
        }).then((res) => {
        })
    }

    static initStyle() {
        return ButtonStyle;
    }

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.constructor.initStyle()
        console.log('666666666666', ButtonStyle)
    }

    render() {
        return(
            <div>
                <h1>App</h1>
                <Button>老子是按钮</Button>
            </div>
        );
    }
}

export default connect()(App);
