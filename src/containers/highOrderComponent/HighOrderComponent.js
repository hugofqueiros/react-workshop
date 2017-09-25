import React, {Component} from 'react';
import PropTypes from 'prop-types';
import H1 from '../../components/h1/H1';
import Card from '../../components/card/Card';
import Form from '../../components/form/Form'

import './HighOrderComponent.css';

export default class HighOrderComponent extends Component {
    static propTypes = {
        title: PropTypes.string
    };

    static defaultProps = {
        title: 'WOWOWOWOWOW'
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('COMPONENT DID MOUNT');
        this.setState({
            isMounted: true
        })
    }

    componentWillMount() {
        console.log('COMPONENT WILL MOUNT');
    }

    componentWillUnmount() {
        console.log('COMPONENT WILL UNMOUNT');
    }

    componentWillReceiveProps(nextProps) {
        console.log('COMPONENT WILL RECEIVE PROPS', nextProps);
        return nextProps;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('SHOULD COMPONENT UPDATE', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('COMPONENT WILL UPDATE', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('COMPONENT DID UPDATE', prevProps, prevState);
    }

    render() {
        const {children, title} = this.props;

        return (
                <div className="HighOrderComponent">
                    <H1 title={title} />
                    <Card title="card title" footerTitle="foottttiiieee">
                        <Form/>
                    </Card>
                    {children};
                </div>
            )
    }
}
