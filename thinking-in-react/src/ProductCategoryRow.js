import React from 'react';

export default class ProductCategoryRow extends React.Component {
 render() {
    return (<tr><th>{this.props.category}</th></tr>);
  }
}
