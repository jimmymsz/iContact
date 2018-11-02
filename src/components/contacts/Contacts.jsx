import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  state = {};

  deleteContact = id => {
    const { contacts } = this.state;

    const cont = contacts.filter(con => con.id !== id);

    this.setState({ contacts: cont });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-primary">Contact </span>
                List
              </h1>
              {contacts.map(c => (
                <Contact
                  key={c.id}
                  contactInfo={c}
                  deleteClickHandler={this.deleteContact.bind(this, c.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );

    // const { contacts } = this.state;
    // return (
    //   <React.Fragment>
    //     {contacts.map(c => (
    //       <Contact
    //         key={c.id}
    //         contactInfo={c}
    //         deleteClickHandler={this.deleteContact.bind(this, c.id)}
    //       />
    //     ))}
    //   </React.Fragment>
    // );
  }
}

export default Contacts;
