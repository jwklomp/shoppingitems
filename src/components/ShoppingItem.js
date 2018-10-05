import React from 'react';
import PropTypes from 'prop-types';

class ShoppingItem extends React.PureComponent {

  static propTypes = {
    itemData: PropTypes.object
  }

  render() {
    return (
      <li>{this.props.itemData.brand} - {this.props.itemData.name}</li>
    );
  }
}

  export default ShoppingItem;