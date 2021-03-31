import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div className="row m-3">
            {
                books.map(book => <Book book={book} key={book._id}></Book>)
            }
        </div>
    );
};

export default Home;