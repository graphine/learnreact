import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    increment() {
        // this.setState( {
        //     count: this.state.count + 1
        // }, () => {console.log('Callback Value', this.state.count)})// use inside the callback function
        // console.log(this.state.count);// to use updated count don't use after setState
        this.setState(// to update from previous value use a function instead of above method
            prevState => (
                {
                    count: prevState.count + 1
                }
            )
        );
        console.log(this.state.count);
    }
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick = { () => this.incrementFive() }>Increment</button>
            </div>
        )
    }
}

export default Counter
