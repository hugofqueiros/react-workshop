import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Form.css';

export default class Form extends Component {
    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: 'whatever'
    };

    constructor(props) {
        super(props);

        this.state = {
            isSubmited: false,
            fname: '',
            lname: '',
            email: '',
            phone: ''
        };

        this.handleSubmit.bind(this);
        this.handleFirsName.bind(this);
        this.handleLastName.bind(this);
        this.handleEmail.bind(this);
        this.handlePhone.bind(this);
    }

    handleSubmit = (e) => {
        console.log('WOWOWOW submit', e);
        this.setState({
            isSubmited: true
        });
    };


    handleFirsName = (e) => {
        e.preventDefault();
        this.setState({fname: e.target.value});
    };

    handleLastName = (e) => {
        e.preventDefault();
        this.setState({lname: e.target.value});
    };

    handleEmail = (e) => {
        e.preventDefault();
        this.setState({email: e.target.value});
    };

    handlePhone = (e) => {
        e.preventDefault();
        this.setState({phone: e.target.value});
    };

    render() {
        const cn = classnames('Form', this.props.className);

        return (
            <form className={cn}>
                <div>
                    <label htmlFor="fname">
                        First Name:
                    </label>
                    <input id="fname" type="text" name="fname" onChange={this.handleFirsName}/>
                </div>
                <div>
                    <label htmlFor="lname">
                        last Name:
                    </label>
                    <input id="lname" type="text" name="lname" onChange={this.handleLastName}/>
                </div>
                <div>
                    <label htmlFor="email">
                        email:
                    </label>
                    <input id="email" type="email" name="email" placeholder="default@example.com" pattern=".+@gmail.com"
                           onChange={this.handleEmail}/>
                </div>
                <div>
                    <label htmlFor="phone">
                        phone:
                    </label>
                    <input id="phone" type='tel' pattern='[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}' name="phone"
                           onChange={this.handlePhone}/>
                </div>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </form>
        )
    }
};

