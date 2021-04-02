import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { LoggedInContext } from '../../App';

const Cart = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext)
    const [cart, setCart] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch(`https://pure-springs-85119.herokuapp.com/cart/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    const total = cart.reduce((total, book) => total + Number(book.bookDetails.bookPrice), 0);
    const handleCheckOut = () => {
        const orderData = {
            checkOut: cart,
            email: loggedInUser.email
        }
        console.log(orderData)
        fetch(`https://pure-springs-85119.herokuapp.com/addOrder`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => console.log('server response', res));
        const url = `https://pure-springs-85119.herokuapp.com/deleteCart/${loggedInUser.email}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                history.push('/orders')
                console.log(result)
            })

    }
    return (
        <div className="row m-5">

            <table className="table shadow-lg p-3 mb-5 bg-light rounded">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(cart =>
                            <tr>

                                <td>{cart.bookDetails.bookName}</td>
                                <td>1</td>
                                <td>{cart.bookDetails.bookPrice}</td>
                            </tr>)
                    }


                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
            <button className=" btn btn-lg btn-info" onClick={handleCheckOut}>Checkout</button>
        </div>
    );
};

export default Cart;