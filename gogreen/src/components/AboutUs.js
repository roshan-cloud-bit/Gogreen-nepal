import React, {Component} from "react";
import img from '../assets/images/trash.jpg';
class AboutUs extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <section id="aboutus">
                    <center><h1 className="recyleNepalText">Recycle Nepal</h1></center>
                    <div className="trainer">

                        <p>Recycle Nepal is an organization created by some energetic youth for the welfare of
                            environment .It was establish in 2019 lorem It is a long established fact that a reader will
                            be distracted by the readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                            to using 'Content here, content here', making it look like readable English. Many desktop
                            publishing packages and web page editors now use Lorem Ipsum as their default model text,
                            and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                            versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                            humour and the like).</p>
                        <center><img className="aboutUsImage" src={img} width="50%"/></center>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English. Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                            uncover many web sites still in their infancy. Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose (injected humour and the like).It is a long
                            established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters.</p>
                    </div>

                </section>
                <center>
                    <div className="map">
                        <h2>We are located at:</h2>
                        <p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0240236179484!2d85.34706467481305!3d27.716544524607688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197d9d23f7ed%3A0x2724281b4393865d!2sChabahil%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1581527013020!5m2!1sen!2snp"
                                width="800" height="300" frameBorder="0" style={{border:'0'}} allowFullScreen=""></iframe>
                        </p>

                    </div>

                </center>
            </div>
        );
    }
}
export default AboutUs;