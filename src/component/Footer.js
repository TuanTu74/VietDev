import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <section className="footer">
                    <div className="box-container">
                        <div className="box">
                            <h3>about us</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maxime!</p>
                        </div>
                        <div className="box">
                            <h3>quick links</h3>
                            <a href="#">home</a>
                            <a href="#">course</a>
                            <a href="#">teacher</a>
                            <a href="#">price</a>
                            <a href="#">contact</a>
                        </div>
                        <div className="box">
                            <h3>follow us</h3>
                            <a href="#">facebook</a>
                            <a href="#">twitter</a>
                            <a href="#">instagram</a>
                            <a href="#">linkedin</a>
                        </div>
                        <div className="box">
                            <h3>contact us</h3>
                            <p> <i className="fas fa-phone" /> +123-456-7890 </p>
                            <p> <i className="fas fa-envelope" /> ReactJS@gmail.com </p>
                            <p> <i className="fas fa-map-marker-alt" /> DaNang, VietNam </p>
                        </div>
                    </div>
                    <div className="credit"> Created by <span> Tuan Tu </span> | all rights reserved </div>
                </section>

            </div>
        );
    }
}

export default Footer;