import React from 'react';
import { Typography, Button, Card, CardActions, CardMedia, CardContent } from '@material-ui/core';
import useStyles from './styles'

const CartItem = ( {item}) => {
    const classes = useStyles();
    return (
       <Card>
              <CardMedia image={item} alt={item.name} className={classes.media} />
              <CardContent className={classes.cardContent}>
                <Typography variant="h4" component="h2">{item.name}</Typography>
                <Typography variant="h5" component="h2">{item.line_total.formatted_with_symbol}</Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                  <div className={classes.buttons}>
                    <Button type="button" size="large">-</Button>
                    <Typography variant="h5" component="h2">{item.quantity}</Typography>
                    <Button type="button" size="large">+</Button>
                  </div>
                  <Button type="button" variant="contained" color="secondary">Remove</Button>
              </CardActions>
       </Card>
    )
}

export default CartItem
