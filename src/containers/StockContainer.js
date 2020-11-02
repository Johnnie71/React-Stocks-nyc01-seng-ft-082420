import React from 'react';
import Stock from '../components/Stock'

class StockContainer extends React.Component{


  renderStocks = () => {
    return this.props.stocks.map(el => <Stock key={el.id} stock={el} deleteFromPortHandler={this.props.deleteFromPortHandler} addPortfolioHandler={this.props.addPortfolioHandler}/>)
  }
  
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
