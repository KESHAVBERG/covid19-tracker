import React, { Component } from 'react';

import styles from './App.module.css';
import Cards from './components/cards/cards';
import Charts from './components/chart/chart';
import Picker from './components/picker/picker';
import { countryselector, fetchData } from './api/index'


class App extends Component {
  state = {
    data: {},
    country: ""
  }


  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data })
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({data:data,country:country})
 }


  render() {
    const{data,country} = this.state;
//     console.log(
// data,country,"selcted ones"
//     )
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <Picker handleCountryChange={this.handleCountryChange} />

        <Charts data={data} country={country} />

      </div>
    );
  }
}
export default App;
