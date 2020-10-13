import React, { Component } from 'react';
import browserHistory from '../history/history';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions';
import { Typography, Paper } from '@material-ui/core';
import { Button, Grid, TextField } from '@material-ui/core';
class Next extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressLine1: '',
            addressLine2: '',
            country: '',
            state: '',
            city: ''
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit() {
        browserHistory.push("/cart", {
            addressLine1: this.state.addressLine1,
            addressLine2: this.state.addressLine2,
            country: this.state.country,
            state: this.state.state,
            city: this.state.city
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Paper style={{ paddingRight: 300, paddingLeft: 300, paddingTop: 20, paddingEnd: "300" }}>
                        <Typography variant="h3" align="center" component="h1" gutterBottom>
                            Add Address
                        </Typography>
                        <Grid xs={12} sm={12}
                            container
                            justify="flex-start"
                            alignItems="center"
                            direction="column"
                            spacing={3}
                            style={{ borderStyle: 'outset', borderColor: '#ff6666' }}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    id="standard-basic"
                                    style={{ width: 300 }}
                                    color="secondary"
                                    value={this.state.addressLine1}
                                    name="addressLine1"
                                    label="Address Line 1 :"
                                    onChange={this.onInputchange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    style={{ width: 300 }}
                                    color="secondary"
                                    value={this.state.addressLine2}
                                    name="addressLine2"
                                    label="Address Line 2 :"
                                    onChange={this.onInputchange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    style={{ width: 300 }}
                                    color="secondary"
                                    value={this.state.country}
                                    name="country"
                                    label="Country :"
                                    onChange={this.onInputchange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    style={{ width: 300 }}
                                    color="secondary"
                                    value={this.state.state}
                                    name="state"
                                    label="State :"
                                    onChange={this.onInputchange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    style={{ width: 300 }}
                                    color="secondary"
                                    value={this.state.city}
                                    name="city"
                                    label="City :"
                                    onChange={this.onInputchange}
                                    required
                                />
                            </Grid>
                            <Grid container justify="space-around">
                                <Button
                                    style={{
                                        float: "right", background: "#ff6666", color: "white",
                                        fontSize: "14px", fontWeight: "bold"
                                    }}
                                    variant="contained"
                                    type="submit">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        addedItems: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Next)