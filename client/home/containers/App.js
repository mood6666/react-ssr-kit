import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'
import superagent from 'superagent'
import { connect } from 'react-redux'

class App extends Component {
    static fetch (state, dispatch, cookie) {
        return superagent.get('http://checkdev.dz11.com/apps/bulletCurtain/toCheck').withCredentials().set({
            cookie,
        }).then((res) => {
            console.log(JSON.parse(res.text))
            dispatch({
                type: 'getOne',
                list: JSON.parse(res.text).data.list || [],
            });
        })
    }

    componentWillMount() {
        this.constructor.fetch(this.props, this.props.dispatch);
    }

    render() {
        console.log(this.props.list)
        return (
            <div className={styles.app}>
                <h1>sadsadasd</h1>
            </div>
        )
    }
}

export default connect((state) => {
    console.log('999', state)
    return {
        list: state.one.list
    }
})(App);
