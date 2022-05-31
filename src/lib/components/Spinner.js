import React from 'react';
import './Spinner.scss';

class Spinner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="login-loading">
                <div className="spinner-container-small">
                    <div className="demo-3-small">
                        <ul className="spinner-small">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="normal-loading-survey-text">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default Spinner;