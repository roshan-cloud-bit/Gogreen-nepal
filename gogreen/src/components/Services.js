import React, {Component} from "react";
import '../assets/css/Services.css';
import img1 from '../assets/images/organic.jpg';
import img2 from '../assets/images/plastic.png';
import img3 from '../assets/images/fertilizers.jpg';

class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentActive: null,
        }
    }

    handleClickEvent = (a) => {
        let b = this.state.currentActive;
        if (b === a) {
            this.setState({
                currentActive: null,
            });
        } else {
            this.setState({
                currentActive: a,
            });
        }

        console.log(this.state.currentActive);
    }

    render() {
        return (
            <div>
                <br/>
                <h1>
                    <center>Services</center>
                </h1>

                <button className="accordion" onClick={(e) => this.handleClickEvent("organic")}>
                    <center>Organic Management</center>
                </button>
                <div className={this.state.currentActive === 'organic' ? 'panel' : 'panel-none'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <img src={img1} width="50%"/>
                </div>

                <button className="accordion" onClick={(e) => this.handleClickEvent('plastic')}>
                    <center>Recycle of Plastic</center>
                </button>
                <div className={this.state.currentActive === 'plastic' ? 'panel' : 'panel-none'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <img src={img2} width="50%"/>

                </div>

                <button className="accordion" onClick={(e) => this.handleClickEvent('fertilizer')}>
                    <center>Fertilizers</center>
                </button>
                <div className={this.state.currentActive === 'fertilizer' ? 'panel' : 'panel-none'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <img src={img3} width="50%"/>
                </div>
            </div>
        );
    }
}

export default Services;