import React, {Component} from 'react';
import moment from 'moment';

import './Clock.css';

export default class Clock extends Component {
    componentWillMount() {
        this.setState({
            time: moment()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                time: moment()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        let time = null;
        if(this.state) {
            time = this.state.time.format('YYYY-MM-DD HH:mm:ss');
        }

        return (
            <div className="Clock">
                {time}
            </div>
        )
    }
}
