import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {


  renderStock(){
    return this.props.portfolio.map(el => <Stock key={el.id} portfolio stock={el} deleteFromPortHandler={this.props.deleteFromPortHandler}/>)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderStock()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
