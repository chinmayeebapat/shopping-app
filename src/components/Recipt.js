import React, { Component } from 'react'
import { connect } from 'react-redux'
import browserHistory from '../history/history';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Recipt extends Component {

    notify = () => {
        toast.dark("Order placed successfully !! Thank you for order...");
    }

    componentWillUnmount() {
    }

    handleCheckout = () => {
        if (this.props.total === null || this.props.total === 0 || this.props.total === '0') {
            alert("Please select Products to check out");
        }
        else {
            this.notify();
            alert("Order placed successfully..Thank you for selecting our products");
        }
        browserHistory.push("/");

    }

    render() {

        return (
            <div className="container">
                <ToastContainer />
                <div className="collection">
                    <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                </div>
                <div className="checkout">
                    <button className="waves-effect waves-light btn" onClick={() => { this.handleCheckout() }}>Checkout</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipt)