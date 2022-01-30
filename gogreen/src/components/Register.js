import React, {Component} from "react";
import '../assets/css/Register.css';
import img from '../assets/images/tree_PNG216.png';

class Register extends Component {
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
                            <h1>Register</h1>
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
                                <tr>
                                    <td>
                                        Company/Organisation
                                    </td>
                                    <td>
                                        : <input type="text" className="input-field" name="organisation"
                                                 placeholder="Organisation Name" required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Address
                                    </td>
                                    <td>
                                        : <input type="text" className="input-field" name="address"
                                                 placeholder="Address" required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Job Title
                                    </td>
                                    <td>
                                        : <input type="text" className="input-field" name="title"
                                                 placeholder="Job Title" required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Email
                                    </td>
                                    <td>
                                        : <input type="text" className="input-field" name="organisation"
                                                 placeholder="Your Email address" required/>
                                    </td>
                                </tr>

                            </table>
                            <center>
                                <button className="registerButton">Register</button>
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

export default Register;