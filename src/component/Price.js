import React, { Component } from 'react';


class PriceSection extends Component {
    render() {
        return (
            <div className="box">
                <h3>basic</h3>
                <div className="amount"><span>$</span>{this.props.price}<span>/mo</span></div>
                <ul>
                    <li>certificates</li>
                    <li>full courses</li>
                    <li>full modules</li>
                    <li>live projects</li>
                    <li>24 x 7 supports</li>
                </ul>
                <a href="#" className="btn">select plan</a>
            </div>
        );
    }
}

class Price extends Component {
    render() {
        return (
            <section className="price">
                <PriceSection price="20"/>
                <PriceSection price="50"/>
                <PriceSection price="70"/>
            </section>

        );
    }
}

export default Price;