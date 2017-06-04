import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render() {
    // comment here
    return (
      <form className="store-selector">
        { /* Hello */ }
        <h2>Please Enter A Store</h2>
        <input type="text" require placeholder="Store Name" defaultValue={getFunName()}/>
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;
