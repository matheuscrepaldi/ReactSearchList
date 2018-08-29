import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextFields = props => (

  <TextField
    id="name"
    type="text"
    margin="normal"
    value={props.value}
    onChange={props.change}
  /> 
)

export default TextFields;