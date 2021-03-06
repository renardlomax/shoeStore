import React from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart }) => {
    const classes = useStyles();
 
   
    const EmptyCart = () => {
        return (
            <Container>
                <Typography variant="subtitle1">
                    Your cart is empty
                </Typography>
            </Container>
        )
    }

    const FillCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item}  />
                      
                    </Grid>
                    
                ))}
            </Grid>
            
            <div className={classes.cardDetails}>
                <Typography variant="h4"> Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" color="secondary" variant="contained">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" color="primary" variant="contained">Checkout</Button>
                </div>
            </div>
        </>

    )
    if(!cart.line_items) return "Loading ...";
     console.log(cart.line_items[3].image.url)
   

    return (
       <Container>
           <div className={classes.toolbar}/>
           <Typography className={classes.title} variant='h3' gutterBottom> Your Shopping Cart</Typography>
           {!cart.line_items.length ? <EmptyCart /> : <FillCart />}  
       </Container>
    )
}

export default Cart
