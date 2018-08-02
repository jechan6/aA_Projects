import React from 'react';

class ItemDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
      const {items} = this.props;
      return (
        <ul>
          <li>Name: {items.name}</li>
          <li>Happiness: {items.happiness}</li>
          <li>Price: ${items.price}</li>
        </ul>
      );
  }
}
export default ItemDetail;
