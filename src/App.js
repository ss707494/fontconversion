import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import './App.scss';

const styles = theme => ({
  textBox: {
    height: 40,
  }
});

@withStyles(styles())
class App extends Component {
  state = {
    font: '',
    content: '',
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleChangeContent = e => {
    this.setState({
      content: e.target.value
    })
  }

  componentDidMount() {
    const canvas = document.getElementById('textBoxC');
    const ctx=canvas.getContext("2d");
    ctx.font="40px tianyingzhang";
    ctx.fillText("Hello World",10,50);
  }
  render() {
    const { classes } = this.props;
    return (
        <div className="App">
          <div className={classes.textBox}>{this.state.content}</div>
          <div className={classes.textBox}>
            <canvas id="textBoxC">
            </canvas>
          </div>
          <div>
            <div>
              <TextField
                  id="standard-name"
                  label="text"
                  className={classes.textField}
                  value={this.state.content}
                  onChange={this.handleChangeContent}
                  margin="normal"
              />
            </div>
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
