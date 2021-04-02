import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://pure-springs-85119.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setBooks(data)
            })
    }, [])
    return (
        <div>
            <nav className='navbar nav m-4'>
                <form className="form-inline mr-auto ml-auto" action="">
                    <input className="form-control  mr-sm-2" type="search" name="" id="" placeholder="search" />
                    <input className="btn btn-info my-2 my-sm-0" type="button" value="Search" />
                </form>
            </nav>
            <div className="row m-3">
                {
                    loading ? <div className="text-center ml-auto mr-auto text-info" style={{ width: '6rem', height: '6rem' }}>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div> :
                        books.map(book => <Book book={book} key={book._id}></Book>)
                }
            </div>
        </div>

    );
};

export default Home;