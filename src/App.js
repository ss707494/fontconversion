import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import './App.scss';

const styles = theme => ({
  textBox: {

  }
});

@withStyles(styles())
class App extends Component {
  state = {
    font: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="textBox"></div>
        <div>
          <FormControl>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
                value={this.state.font}
                onChange={this.handleChange}
                inputProps={{
                  name: 'font',
                  id: 'age-simple',
                }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default App;
