import React, { Component } from 'react';
import ImgHome from './images/home-img.svg';

class Home extends Component {
    render() {
        return (
            <div>
                <section className="home">
                    <div className="content">
                        <h3>E-learning is a better way of learning</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia repellat aperiam libero, beatae
                            debitis iusto quia sit aliquid placeat facilis?</p>
                        <a href="/course" className="btn">get started</a>
                    </div>
                    <div className="image">
                        <img src={ImgHome} alt="" />
                    </div>
                </section>

            </div>
        );
    }
}

export default Home;    