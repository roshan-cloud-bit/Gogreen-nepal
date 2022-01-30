import React, {Component} from "react";
import facebook from '../assets/images/icons8-facebook-old-48.png';
import gmail from '../assets/images/icons8-gmail-48.png';
import Insta from '../assets/images/icons8-instagram-48.png';
import Twitter from '../assets/images/icons8-twitter-48.png';

 class Footer extends Component{
     constructor(props) {
         super(props);
     }
     render() {
         return(
             <footer>

                 <div className="copyRight">
                     <p>©2020 Recycle Nepal. RN. All Rights Reserved.</p>
                 </div>

                 <h1>Find us at: </h1>

                 <div className="social">
                     <div className="facebook">
                         <a href="http://facebook.com" target="_blank" />
                         <img src={facebook} />
                     </div>

                     <div className="gmail">
                         <a href="http://gmail.com" target="_blank" />
                         <img src={gmail} />
                     </div>

                     <div className="insta">
                         <a href="http://instgram.com" target="_blank" />
                         <img src={Insta} />
                     </div>

                     <div className="twitter">
                         <a href="http://Twitter.com" target="_blank" />
                         <img src={Twitter} />
                     </div>

                 </div>
             </footer>
         );
     }
 }
 export default Footer;