import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    api: [],
    filteredApi: [],
    portfolio: [],
    sort: "",
    filter: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(data => this.setState({ api: data, filteredApi: data }))
  }

  addPortfolioHandler = (stock) => {
    console.log("inside addport", stock)
    this.setState(()=> ({ portfolio: [stock, ...this.state.portfolio] }))
  }

  deleteFromPortHandler = (stockObj) => {
    console.log("inside Delete", stockObj)
    let clickedStock = this.state.portfolio.filter(stock => stock.id !== stockObj.id)
    this.setState(() => ({portfolio: clickedStock}))
  }

  sortStocks = (e) => {
    if(e.target.value === 'Alphabetically'){
      let alphabetically = this.state.api.sort((a, b) => a.name > b.name ? 1 : -1)
      this.setState(() => ({
        api: alphabetically,
        sort: "Alphabetically"
        }))
    } else if (e.target.value === "Price"){
        let byPrice = this.state.api.sort((a, b) => a.price > b.price ? 1 : -1)
        this.setState(() => ({
        api: byPrice,
        sort: "Price"
        }))
      } 
  }

    filterStocks = (e) => {
      let optionType = e.target.value

      let filteredStocks = this.state.filteredApi.filter(stock => stock.type.includes(optionType))
      this.setState(() => ({
        api: filteredStocks,
        filter: optionType
      }))
    }

  render() {
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} sort={this.state.sort} filterStocks={this.filterStocks} filter={this.state.filter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.api} addPortfolioHandler={this.addPortfolioHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} deleteFromPortHandler={this.deleteFromPortHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
