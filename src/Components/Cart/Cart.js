import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Cart = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5055/book/${bookId}`)
            .then(res => res.json())
            .then(data => setBook(data[0]))
    }, [bookId])
    console.log(book)
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
                    <tr>
                        <td>{book.bookName}</td>
                        <td>1</td>
                        <td>{book.bookPrice}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td>{book.bookPrice}</td>
                    </tr>
                </tbody>
            </table>
            <button className=" btn btn-lg btn-info">Checkout</button>
        </div>
    );
};

export default Cart;