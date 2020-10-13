import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'
import Recipt from './Recipt'
class Cart extends Component {

    state = {
        addressLine1: this.props.location.state.addressLine1,
        addressLine2: this.props.location.state.addressLine2,
        country: this.props.location.state.country,
        state: this.props.location.state.state,
        city: this.props.location.state.city
    };
    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (

                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={item.img} alt={item.img} className="" />
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart">
                                        <i className="material-icons" onClick={() => { this.handleAddQuantity(item.id) }}>
                                            arrow_drop_up
                                        </i>
                                    </Link>
                                    <Link to="/cart">
                                        <i className="material-icons" onClick={() => { this.handleSubtractQuantity(item.id) }}>
                                            arrow_drop_down
                                        </i>
                                    </Link>
                                </div>
                                <button
                                    className="waves-effect waves-light btn pink remove"
                                    onClick={() => { this.handleRemove(item.id) }}>
                                    Remove
                                </button>
                            </div>

                        </li>

                    )
                })
            ) :

            (
                <p>Nothing is added to cart.</p>
            )
        return (
            <div className="container">
                <br />
                <Paper style={{ padding: 20, borderColor: 'black' }}>
                    <b>
                        Address Line 1:  {this.state.addressLine1}
                    </b><br />
                    <b>
                        Address Line 2:  {this.state.addressLine2}
                    </b><br />
                    <b>
                        country :  {this.state.country}
                    </b><br />
                    <b>
                        state :  {this.state.state}
                    </b><br />
                    <b>
                        city :  {this.state.city}
                    </b>
                    <div className="cart">
                        <h5>You have ordered:</h5>
                        <ul className="collection">
                            {addedItems}
                        </ul>
                    </div>
                    <Recipt />
                </Paper>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        addedItems: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)