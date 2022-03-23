import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
      {/* <LoadCountries></LoadCountries> */}
    </div>
  );
}

function LoadCountries(){
  const [Countries, setCountries] = useState([])
  useEffect( () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
  return(
    <div>
      <h2>Visiting Whole World</h2>
      <h4>Available Countries: {Countries.length}</h4>
      {
        Countries.map(country => <Country name={country.name} population={country.population} capital={country.capital}></Country> )
      }
    </div>
  )
}

function Country(props){
  return(
    <div className='container'>
      <h2>Name: {props.name}</h2>
      <h3>Capital: {props.capital}</h3>
      <h4>Population: {props.population}</h4>
      
    </div>
  )
}

export default App;
