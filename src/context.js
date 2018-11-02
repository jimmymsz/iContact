import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case "EDIT_CONTACT":
      const idx = state.contacts.findIndex(
        element => Number(element.id) === Number(action.payload.id)
      );
      let updatedContacts = state.contacts;

      updatedContacts[idx].name = action.payload.name;
      updatedContacts[idx].email = action.payload.email;
      updatedContacts[idx].phone = action.payload.phone;

      return {
        ...state,
        contacts: updatedContacts
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(res.data);
    let startingContacts = [...this.state.contacts];
    res.data.forEach(el => {
      const { name, id, phone, email } = el;
      const newContact = { id, name, email, phone };
      startingContacts = [...startingContacts, newContact];
    });
    this.setState({ contacts: startingContacts });
  }
  state = {
    contacts: [
      // {
      //   id: 11,
      //   name: "John Doe",
      //   email: "jdoe@gmail.com",
      //   phone: "555-111-2341"
      // },
      // {
      //   id: 12,
      //   name: "Karen Will",
      //   email: "kwill@gmail.com",
      //   phone: "123-111-2341"
      // },
      // {
      //   id: 13,
      //   name: "Henry Johnson",
      //   email: "henry@gmail.com",
      //   phone: "222-333-3341"
      // }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
