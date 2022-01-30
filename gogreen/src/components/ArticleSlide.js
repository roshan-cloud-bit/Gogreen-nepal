import React, {Component, createRef} from "react";
import img1 from '../assets/images/sli0.jpg';
import img2 from '../assets/images/sli1.jpg';
import img3 from '../assets/images/sli2.jpg';
import img4 from '../assets/images/sli3.jpg';

class ArticleSlide extends Component{
    constructor(props) {
        super(props);

        this.images = [img1, img2, img3, img4];

        this.imgPos = 0;
        this.state = {
            currentImg: this.images[0],
        }
    }

    componentDidMount = () => {
        this.changeImage()
    }

    changeImage = () => {
        if (this.imgPos == 3){
            this.imgPos = 0;
        }
        this.imgPos = this.imgPos + 1;
        this.setState({
            currentImg: this.images[this.imgPos]
        });

        setTimeout(this.changeImage, 1000);
    }


    render() {
        return(
            <div className="article">
                <div className="title">
                    <h1>
                        <center>
                            <div className="head11">Read Article</div>
                        </center>
                    </h1>
                </div>
                <center>
                    <div className="button">
                        <a href="https://aces.nmsu.edu/pubs/_g/G314.pdf" className="btn">
                            <img name="slide" width="300" height="350" src={this.state.currentImg} />
                        </a>
                    </div>
                </center>
            </div>
        );
    }

}
export default ArticleSlide;