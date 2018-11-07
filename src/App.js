import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
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
    imgSrc: '',
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChangeContent = e => {
    this.setState({
      content: e.target.value
    })
  }

  handleGetImg = async e => {
    const res = await fetch('/getImg/' + this.state.content)
    const json = await res.json()
    this.setState({
      imgSrc: json.src,
    })
  }

  componentDidMount() {
  }

  render() {
    const { classes } = this.props;
    return (
        <div className="App">
          <div className={classes.textBox}>
            <img src={this.state.imgSrc} alt=""/>
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
            <div>
              <Button variant="outlined" color="primary" onClick={this.handleGetImg}>
                转换
              </Button>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
