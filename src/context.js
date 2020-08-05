import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'sachin',
        email: 'sachin@example.com',
        phone: '555-555-5555',
      },
      {
        id: 2,
        name: 'rahul',
        email: 'rahul@example.com',
        phone: '555-555-5555',
      },
      {
        id: 3,
        name: 'vipin',
        email: 'vipin@example.com',
        phone: '555-555-5555',
      },
    ],
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
