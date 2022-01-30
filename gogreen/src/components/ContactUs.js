import React, {Component} from "react";
import '../assets/css/ContactUs.css';

class ContactUs extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(

                <div className="contactUs">
                    <div className="contactUsHeading">
                        <center><h1>Contact Us</h1></center>
                    </div>
                    <div className="contactUsBox">

                        <form className="contactForm">

                            <label htmlFor="fname">First Name</label>
                            <input className="contactForm" type="text" id="fname" name="firstname"
                                   placeholder="Your name.." />

                                <label htmlFor="lname">Last Name</label>
                                <input className="contactForm" type="text" id="lname" name="lastname"
                                       placeholder="Your last name.." />

                                    <label htmlFor="City">City</label>
                                    <select id="City" name="City">
                                        <option value="Kathmandu">Kathmandu</option>
                                        <option value="Pokhara">Pokhara</option>
                                        <option value="Biratnagar">Biratnagar</option>
                                        <option value="Ithari">Ithari</option>
                                        <option value="Rajbiraj">Rajbiraj</option>
                                        <option value="Dharan">Dharan</option>
                                        <option value="jhapa">Jhapa</option>
                                    </select>

                                    <label htmlFor="subject">Subject</label>
                                    <textarea id="subject" name="subject" type="text" placeholder="Write something.."
                                              style={{height:'200px'}}></textarea>

                                    <input className="contactForm" type="submit" value="Submit" />

                        </form>

                    </div>
                </div>

        );
    }
}
export default ContactUs;