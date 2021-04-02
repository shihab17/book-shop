import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { LoggedInContext } from '../../App';

const Book = (props) => {
    const { _id, bookName, authorName, bookPrice, imageURL } = props.book;
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext)
    const history = useHistory();
    const handleBook = bookId => {
        if(loggedInUser.email){
        fetch(`https://pure-springs-85119.herokuapp.com/book/${bookId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0].bookName)
                const cartData = {
                    bookDetails: data[0],
                    email: loggedInUser.email,
                    name: loggedInUser.name
                }
                fetch(`https://pure-springs-85119.herokuapp.com/addCart`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(cartData)
                })
                .then(res => history.push(`/cart`))
            })
        }
        else{
            history.push('/login')
        }
        
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
                        <button className=" btn-lg btn-info" onClick={() => handleBook(_id)}> Buy Now</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Book;