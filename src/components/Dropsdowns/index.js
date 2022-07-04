import React from 'react';
import { checkStatus, json } from './utils';
import Select from 'react-select';

const styles = {
  container: base => ({
    ...base,
    flex: 1
  })
};

class DropDown extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      currencies: [],
      selectedOption: null,
      error: ''
    }
  }

  componentDidMount() {
    fetch(`https://altexchangerateapi.herokuapp.com/currencies`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data !== data) {
          throw new Error(data.Error);
        }
        if (data === data) {

          this.setState({
            currencies: data
          })
        }
      })
      .catch((error) => {
        this.setState({ error: error.message })
        console.log(error);
      })
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    const { selectedOption } = this.state;
    const { currencies } = this.state;
    let option = []

    if (Object.entries(currencies).length > 0) {
      Object.entries(currencies).forEach(item => {
        let selectable = {}
        selectable.value = item[0]
        selectable.label = item.join(" - ")
        option.push(selectable)
      })
    }

    return (
      <Select   
      styles={styles}   
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: 'white',
          primary: 'black',
        },
      })}
      options={option}
      value={selectedOption}
      onChange={this.handleChange}
      />
    )
  }
}

export default DropDown;