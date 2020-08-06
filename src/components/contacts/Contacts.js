import React, { Component, Fragment } from 'react';
import { Consumer } from '../../context';

import Contact from './Contact';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => (
          <Fragment>
            <h1 className='display-4 mb-3'>
              <span className='text-danger'>Contact</span>List
            </h1>
            {value.contacts.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </Fragment>
        )}
      </Consumer>
    );
  }
}

export default Contacts;
