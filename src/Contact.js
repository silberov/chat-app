import React from 'react';
import './Contact.css';

function Contact() {
    return (
      <div className="Contact">
          <div className="avatar">
                <img className="avatar" src="https://randomuser.me/api/portraits/women/10.jpg" />
            </div>
            <div>
                <p className="name">Jenny Gordon</p>
                <div className="status">
                    <div className="status-online"></div>
                    <p className="status-text">online</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Contact;
  