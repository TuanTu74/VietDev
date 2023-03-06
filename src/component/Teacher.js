import React, { Component } from 'react';
import ImgTeacher1 from './images/teacher-1.png';
import ImgTeacher2 from './images/teacher-2.png';
import ImgTeacher3 from './images/teacher-3.png';
import ImgTeacher4 from './images/teacher-4.png';


class TeacherSection extends Component {
    render() {
        return (
            <div className="box">
                    <img src={this.props.pic} alt="" />
                    <h3>{this.props.name}</h3>
                    <span>teacher</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, nobis.</p>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f" />
                        <a href="#" className="fab fa-twitter" />
                        <a href="#" className="fab fa-instagram" />
                        <a href="#" className="fab fa-linkedin" />
                    </div>
            </div>
        );
    }
}

class Teacher extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="heading"> Experienced teachers </h1>
                    {/* teacher section  */}
                    <section className="teacher">
                        <TeacherSection pic={ImgTeacher1} name="Lisa "/>
                        <TeacherSection pic={ImgTeacher2} name="John "/>
                        <TeacherSection pic={ImgTeacher3} name="Jun "/>
                        <TeacherSection pic={ImgTeacher4} name="Peter "/>
                    </section>
                </div>

            </div>
        );
    }
}

export default Teacher; 