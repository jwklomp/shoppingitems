import React from 'react';
import ShoppingItem from "./ShoppingItem";
import PropTypes from 'prop-types';

class ShoppingList extends React.Component {

  static propTypes = {
    items: PropTypes.array,
    name: PropTypes.string
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.items !== this.props.items;
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