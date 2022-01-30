import React, {Component} from 'react';
import img from "../assets/images/tree_PNG216.png";


class Login extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <br/>
                <div id="registerBox">
                    <div className="withOutTree">
                        <div className="registerText">
                            <h1>Login</h1>
                        </div>
                        <div className="registerTable">
                            <table className="table1">
                                <tr>
                                    <td>
                                        User Name
                                    </td>
                                    <td>
                                        : <input type="text" className="input-field" name="username"
                                                 placeholder="Enter Username" required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Password
                                    </td>
                                    <td>
                                        : <input type="password" className="input-field" name="Password"
                                                 placeholder="Your Password" required/>
                                    </td>
                                </tr>
                                <tr></tr>
                                <tr></tr>
                                <tr></tr>

                            </table>
                            <center>
                                <button className="registerButton">Login</button>
                            </center>

                        </div>
                    </div>
                    <div className="withTree">
                        <img src={img} alt="tree.img" height="450px"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;