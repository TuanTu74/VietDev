import React, { Component } from 'react';

class contact extends Component {
    render() {
        return (
            <section className="contact">
                <div className="image">
                    <img src="images/contact-img.svg" alt="" />
                </div>
                <form action>
                    <div className="inputBox">
                        <input type="text" placeholder="name" />
                        <input type="email" placeholder="email" />
                    </div>
                    <input type="text" placeholder="subject" className="box" />
                    <textarea placeholder="message" name id cols={30} rows={10} defaultValue={""} />
                    <input type="submit" className="btn" defaultValue="send" />
                </form>
            </section>

        );
    }
}

export default contact;