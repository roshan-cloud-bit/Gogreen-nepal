import React, {Component} from "react";
import Navbar from "./Navbar";
import ArticleSlide from "./ArticleSlide";
import SlideShow from "./SlideShow";

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br/><br/><br/>

                <div className="videoArticle">

                    <div className="video">
                        <h1>
                            <center>
                                <div className="head11"> Watch Video</div>
                            </center>
                        </h1>
                        <center>
                            <div className="button">
                                <iframe width="460" height="400" src="https://www.youtube.com/embed/C6teHZ0uU2U"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </center>
                    </div>

                    <ArticleSlide/>
                </div>

                <br/><br/><br/><br/><br/><br/>

                <SlideShow />

                <br/>
            </div>
        );
    }


}

export default Index;