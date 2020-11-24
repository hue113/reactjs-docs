import React, { Component } from 'react';
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }
    
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        /* First way: use if-else to define button here, then render button in return() */
        // let button;
        // if (isLoggedIn) {
        //     button = <LogoutButton onClick={this.handleLogoutClick} />;
        // } else {
        //     button = <LoginButton onClick={this.handleLoginClick} />;
        // }

        /* Second way: use Inline If-Else with Conditional Operator to render Logout/Login button directly in return() */
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {/* {button} */}
                {isLoggedIn
                    ? <LogoutButton onClick={this.handleLogoutClick} />
                    : <LoginButton onClick={this.handleLoginClick} />
                }
            </div>
        );
    }
}

export default LoginControl;