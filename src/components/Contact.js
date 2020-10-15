import React from 'react';
import PropTypes from 'prop-types';
import '../Contact.css';


function Contact(props) {
    return (
      <div className="Contact">
          <div className="avatar">
                <img className="avatar" src={props.avatar} alt="user"/>
            </div>
            <div className="contactText">
                <p className="name">{props.name}</p>
                <div className="status">
                    <div className={props.online? "status-online" : "status-offline"}></div>
                    <p className="status-text">{props.online? "online" : "offline"}</p>
                </div>
            </div>
        </div>
    );
  }

  Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
};


  export default Contact;
  