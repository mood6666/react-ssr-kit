import React, {Children, Component, cloneElement} from 'react'

class App extends Component {
    render() {
        const {children, ...props} = this.props;

        return(
            <div>
                <h1>你好，我是父级</h1>
                <div>
                    {Children.map(children, child =>
                        cloneElement(child, {...props})
                    )}
                </div>
            </div>
        );
    }
}

export default App;

