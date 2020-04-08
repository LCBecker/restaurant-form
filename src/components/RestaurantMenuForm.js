import React, { useState } from 'react';
import { 
  Button, 
  ButtonGroup, 
  CssBaseline, 
  TextField, 
  FilledInput,
  FormGroup,
  FormControl, 
  FormControlLabel,
  Grid,
  InputLabel,
  InputAdornment,
  Paper, 
  Switch, 
  FormLabel,
Typography} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
  import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  toggleContainer: {
    margin: theme.spacing(2, 0),
  },
  root: {
    '&$selected': {
      //backgroundColor: theme.palette.primary
      backgroundColor: "red",
    }
  }
}));

const RestaurantMenuForm = () => {
  const classes = useStyles();
  const [mealTypes, setMealTypes] = useState(() => []);
   
/* TODO
 * Add styling to depress button when meals are selected.
 * cannot do ATM: image file upload.
 */

 const handleMealTypes = (event, mealTypes) => {
   setMealTypes(mealTypes);
 }

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Paper style={{ padding: 16 }}>
        <Typography variant="h4" align="center">Add a Meal</Typography>    
        <form noValidate autoComplete="off">
          <FormGroup>
            <TextField id="itemName" className={classes.margin} label="Item Name" variant="filled" />
            <TextField id="itemDescription" className={classes.margin} label="Description" variant="filled" multiline rows={4} />
            <TextField id="itemPrice" className={classes.margin} label="Price" variant="filled" type="number" InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>,}}/>
          </FormGroup>
          <FormControl component="fieldset" className={classes.margin}>
          <FormLabel component="legend">Dietary Accommodations</FormLabel>
          <FormGroup row>
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
          </FormGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.margin}>
            <FormLabel component="legend">Item is available for (check all that apply)</FormLabel>
            <Grid item sm={12} md={6}>
              <div className={classes.toggleContainer}>
              <ToggleButtonGroup value={mealTypes} onChange={handleMealTypes}  aria-label="mealType">
                <ToggleButton value="breakfast" className={classes.root} aria-label="breakfast">Breakfast</ToggleButton>
                <ToggleButton value="lunch" className={classes.root} aria-label="lunch">Lunch</ToggleButton>
                <ToggleButton value="dinner" /* classes={{ selected: classes.mealTypeSelected }} */ aria-label="dinner">Dinner</ToggleButton>
                </ToggleButtonGroup>
                </div>
                </Grid>



              {/* <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button>Breakfast</Button>
                <Button>Lunch</Button>
                <Button>Dinner</Button>
              </ButtonGroup> */}
          </FormControl>
        </form>
      </Paper>
    </div>
  )
}

export default RestaurantMenuForm;