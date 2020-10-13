import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import browserHistory from '../history/history';
import { Button } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Home extends Component {
    enableNext = false;

    notify = () => toast.dark("Item added Successfully ! Select more products or click next to go to the cart !!");

    handleClick = (id) => {
        this.props.addToCart(id);
        this.enableNext = true;
        this.notify();
    }

    handleNext = () => {
        if (this.enableNext === true) {
            browserHistory.push("/next");
        }
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title} />
                        <span className="card-title">{item.title}</span>
                        <span to="/"
                            className="btn-floating halfway-fab waves-effect waves-light red"
                            onClick={() => { this.handleClick(item.id) }}>
                            <i className="material-icons">
                                add
                            </i>
                        </span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>

            )
        })

        return (
            <div className="container">
                <ToastContainer />
                <Button style={{ float: "right", background: "#ff6666", fontSize: "30px", fontWeight: "bold" }}
                    variant="contained"
                    color="secondary"
                    disableElevation
                    size="large"
                    onClick={() => { this.handleNext() }}
                    disabled={!(this.enableNext)}>
                    <h6>Next</h6>
                </Button>
                <h3 className="center">Our Items</h3>
                <br />
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)