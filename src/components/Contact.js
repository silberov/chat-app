import React from 'react';
import PropTypes from 'prop-types';
import '../Contact.css';


class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {online: this.props.online};
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
        console.log("zdefjhjsd")
      this.setState(state => ({
        online: !state.online
      }));
    }
  
    render() {
      return (
        <div className="Contact">
            <img className="avatar" src={this.props.avatar} alt="user"/>
            <div className="contactText">
                <p className="name">{this.props.name}</p>
                <div onClick={() => this.handleClick()} className="status">
                    <div  className={this.state.online? "status-online" : "status-offline"}>
                    </div>
                    <p className="status-text">{this.state.online? "online" : "offline"}</p>
                </div>
            </div>
        </div>
      );
    }
}

   Contact.propTypes = {
     avatar: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     online: PropTypes.bool.isRequired
};


  export default Contact;
  