import React from 'react'
// import { render } from 'react-dom'

class Stock extends React.Component{


  state= {
    bought: false
  }

  clickToPortHandler = () => {
        this.props.addPortfolioHandler(this.props.stock)
    }

    deleteFromPortHandler = () => {
      this.props.deleteFromPortHandler(this.props.stock)
    }
  
  render(){
    let stock = this.props.stock

    return(
      <div>
        <div className="card" >
          <div className="card-body" onClick={this.props.portfolio ? this.deleteFromPortHandler : this.clickToPortHandler} >
            <strong>Ticker: {stock.ticker}</strong>
            <h5 className="card-title">{stock.name}</h5>
            <p className="card-text">${stock.price}</p>
            <strong>{stock.type}</strong>
          </div>
        </div>
      </div>
    )
  }



  };

export default Stock
