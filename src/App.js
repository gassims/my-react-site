import React, { Component } from 'react';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';
import {OrgUnitList} from './components/orgU/orgU.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orgUnitsArray: [
        {name:"Bolivia (Plurinational State of)",alpha3Code:"BOL"},
        {name:"Ethiopia",alpha3Code:"ETH"},
        {name:"Réunion",alpha3Code:"REU"},
        {name:"Russian Federation",alpha3Code:"RUS"},
        {name:"Saint Helena, Ascension and Tristan da Cunha",alpha3Code:"SHN"},
        {name:"British Indian Ocean Territory",alpha3Code:"IOT"},
        {name:"Brunei Darussalam",alpha3Code:"BRN"},
        {name:"Comoros",alpha3Code:"COM"},
        {name:"Macao",alpha3Code:"MAC"},
        {name:"Myanmar",alpha3Code:"MMR"},
        {name:"Saint Kitts and Nevis",alpha3Code:"KNA"},
        {name:"Switzerland",alpha3Code:"CHE"}
      ],
      searchField: ''
    }
 /*    this.handleChanges = this.handleChanges.bind(this); */
  }
  
  componentDidMount() {
  /*
    fetch('https://jsonplaceholder.typicode.com/users')    
    .then(response => response.json())
    .then(users=>this.setState({whatever: users}))
    .catch(error=>console.log('error',error));
  */
  }
  handleChanges= (d) => {
    this.setState({searchField: d.target.value})
  }
  render() { 
    const {searchField, orgUnitsArray } = this.state; 
    const filteredOrgunits =
    orgUnitsArray.filter(
      orgUnit => orgUnit.name.toLowerCase()
    .includes(searchField.toLowerCase()))
    return (
    <div className="App">
      <h1 id='title'>Countries</h1>
      
      <SearchBox 
      placeholder='search countries'
      handleChanges ={this.handleChanges}
      />
       <p><br/><br/><br/></p>
       <OrgUnitList orgUnits={filteredOrgunits}></OrgUnitList>
  </div>
    )
  }
}

export default App;
