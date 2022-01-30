import React, {Component} from "react";
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

class SlideShow extends Component{
    constructor(props) {
        super(props);

        this.images = [img1, img2, img3];

        this.currentPos = 0;
        this.state = {
            currentImg: this.images[0],
        }
    }

    handleRightClick = () => {
        if (this.currentPos == 2) {
            this.currentPos = 0;
        } else {
            this.currentPos++;
        }

        this.setState({
            currentImg: this.images[this.currentPos],
        });
    }

    handleLeftClick = () => {
        if (this.currentPos == 0){
            this.currentPos = 2;
        } else {
            this.currentPos--;
        }

        this.setState({
            currentImg: this.images[this.currentPos],
        })
    }

    render() {
        return (

                <div className="slideshow-container">

                    <div className="fade">
                        <div className="numbertext">{this.currentPos+1}</div>
                        <img src={this.state.currentImg} style={{width:'100%'}} />

                    </div>


                    <a className="prev" onClick={this.handleLeftClick}>&#10094;</a>
                    <a className="next" onClick={this.handleRightClick}>&#10095;</a>
                </div>
        );
    }

}

export default SlideShow;