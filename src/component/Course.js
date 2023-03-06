import React, { Component } from 'react';
import Course1 from './images/course-1.svg';
import Course2 from './images/course-2.svg';
import Course3 from './images/course-3.svg';
import Course4 from './images/course-4.svg';
import Course5 from './images/course-5.svg';
import Course6 from './images/course-6.svg';

class CourseSection extends Component {
    render() {
        return (
            <div className="box">
                <span className="amount">{this.props.price}</span>
                <img src={this.props.pic} alt="" />
                <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                </div>
                <a href='#'><h3>{this.props.title}</h3></a>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam omnis odit accusamus
                    doloremque? Cum aliquid unde nulla. Vitae, adipisci?</p>
                <a href="#" className="btn">learn more</a>
                <div className="icons">
                    <p> <i className="far fa-clock" /> 2 hours </p>
                    <p> <i className="far fa-calendar" /> 6 months </p>
                    <p> <i className="fas fa-book" /> 12 modules </p>
                </div>
            </div>
        );
    }
}


class Course extends Component {
    render() {
        return (
            <div>
                <section className="course">
                    <CourseSection price="$29.99" pic={Course1} title="Front-End "/>
                    <CourseSection price="$39.99" pic={Course2} title="Back-End "/>
                    <CourseSection price="$59.99" pic={Course3} title="ReactJS "/>
                    <CourseSection price="$59.99" pic={Course4} title="Angular "/>
                    <CourseSection price="$59.99" pic={Course5} title="VueJS "/>
                    <CourseSection price="$99.99" pic={Course6} title="Full-stack "/>
                   
                </section>

            </div>
        );
    }
}

export default Course;