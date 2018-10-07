import React from 'react';
import ShoppingItem from "./ShoppingItem";
import PropTypes from 'prop-types';

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}

class ShoppingList extends React.PureComponent {

  static propTypes = {
    items: PropTypes.array,
    name: PropTypes.string
  }
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            {this.props.items.map(itemData => 
             <ShoppingItem key = {JSON.stringify(itemData)} itemData = {itemData}/>
            )}
          </ul>
        </div>
      );
    }
  }

  export default ShoppingList;