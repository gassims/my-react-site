import React, { Component } from 'react';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';
import {CountryList} from './components/Country/Country';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countriesArray: [],
      searchField: ''
    }

  }
  
  componentDidMount() {
    fetch("https://restcountries.com/v2/all?fields=name,alpha3Code")
  .then(response => response.json())
  .then(resp =>resp.map(
    country => ({name: country.name, alpha3Code: country.alpha3Code})))
  .then(result => this.setState({countriesArray: result}))
  .catch(errors => console.log('error', errors))

}
  handleChanges= (d) => {
    this.setState({searchField: d.target.value})
  }

  render() { 
    const {searchField, countriesArray } = this.state; 
    const searchedCountries =
    countriesArray
    .filter(country => country.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
    <div className="App">
      <h1 id='title'>Countries</h1>
      <SearchBox 
      placeholder='search countries'
      handleChanges ={this.handleChanges}
      />
       <p><br/><br/><br/></p>
       <CountryList countries={searchedCountries}></CountryList>
  </div>
    )
  }
}

export default App;
