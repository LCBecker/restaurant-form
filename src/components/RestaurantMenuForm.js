import React from 'react';
import { 
  Button, 
  ButtonGroup, 
  CssBaseline, 
  TextField, 
  FormGroup, 
  FormControlLabel,
  Grid,
  Paper, 
  Switch } from '@material-ui/core';

const RestaurantMenuForm = () => {
  
  /* itemNode: {
    cursor: randomKey,
    name: TextField,
    description: TextField // multiline,
    price: TextField //number mask
    vegan: Switch,
    vegitarian: Switch,
    gluten: Switch
    image: TextField //or file upload,
    available: ButtonGroup // options ['breakfast', 'lunch', 'dinner'] 
} */



  return (

    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
    <CssBaseline />
      <Paper style={{ padding: 16 }}>    
        <form noValidate autoComplete="off">
          <FormGroup>
            <TextField id="itemName" label="Item Name" variant="filled" />
            <TextField id="itemDescription" label="Description" variant="filled" multiline rows={4} />
            <TextField id="itemPrice" label="Price" variant="filled" type="number" />
          </FormGroup>
          <FormControlLabel
            control={
              <Switch
                name="vegetarian"
                color="primary"
              />
            }
            label="Vegetarian"
          />
          <FormControlLabel
            control={
              <Switch
                name="vegan"
                color="primary"
              />
            }
            label="Vegan"
          />
          <FormControlLabel
            control={
              <Switch
                name="gluten_free"
                color="primary"
              />
            }
            label="Gluten-Free"
          />
          <FormGroup>
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button>Breakfast</Button>
            <Button>Lunch</Button>
            <Button>Dinner</Button>
          </ButtonGroup>
          </FormGroup>
        </form>
      </Paper>
    </div>
  )
}

export default RestaurantMenuForm;