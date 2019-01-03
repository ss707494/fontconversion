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
  textBox: {}
});

@withStyles(styles())
class App extends Component {
  state = {
    font: '',
    content: '',
    imgSrc: '',
    fontSize: '',
    height: '',
    width: '',
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
    const res = await fetch(`/getImg/${this.state.content}?fontSize=${this.state.fontSize}&height=${this.state.height}&width=${this.state.width}`)
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
            <img src={this.state.imgSrc}
                 alt=""
            />
          </div>
          <div>
            <div>
              <TextField id="standard-name"
                         label="text"
                         className={classes.textField}
                         value={this.state.content}
                         onChange={this.handleChangeContent}
              />
            </div>
            <div>
              <Button variant="outlined"
                      color="primary"
                      onClick={this.handleGetImg}
              >
                转换
              </Button>
            </div>
            <div>
              <TextField label="fontSize"
                         name="fontSize"
                         value={this.state.fontSize}
                         onChange={this.handleChange}
              />
            </div>
            <div>
              <TextField label="height"
                         name="height"
                         value={this.state.height}
                         onChange={this.handleChange}
              />
            </div>
            <div>
              <TextField label="width"
                         name="width"
                         value={this.state.width}
                         onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
