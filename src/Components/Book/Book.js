import React from 'react';
import { useHistory } from 'react-router';

const Book = (props) => {
    const {_id, bookName, authorName, bookPrice, imageURL } = props.book;
    
    const history = useHistory();
    const handleBook = bookId => {
        history.push(`/cart/${bookId}`)
        console.log("clicked", bookId)
    }
    return (
        <div className="col-md-4 mb-5 ">
            <div className="card bg-light" style={{ width: '24rem' }}>
                <div className="card-body">
                <img src={imageURL} className="card-img-top p-4" alt="..." />
                    <h3 className="card-title">{bookName}</h3>
                    <h5 className="card-text"> {authorName} </h5>
                </div>
                <div className="row p-3">
                    <div className="col-6">
                        <h3 className="p-2">$ {bookPrice}</h3>
                    </div>
                    <div className="col-6 float-right">
                        <button className=" btn-lg btn-info" onClick={ () => handleBook(_id)}> Buy Now</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Book;