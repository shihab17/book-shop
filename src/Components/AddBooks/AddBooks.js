import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddBooks = () => {
    const { handleSubmit, register } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const bookData = {
            bookName: data.bookName,
            authorName: data.authorName,
            bookPrice: data.bookPrice,
            imageURL: imageURL
        };
        const url = `http://localhost:5055/addBook`;
        console.log(bookData)
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(res => console.log('server response', res))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '9c8dcdb84d4e32f5d28caede55bbc3e2')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response);
                setImageURL(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="bookName" className="form-label">Book Name</label>
                        <input type="text" className="form-control" name="bookName" id="bookName" placeholder="Enter Book Name" ref={register} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="authorName" className="form-label">Author Name</label>
                        <input type="text" className="form-control" name="authorName" id="authorName" placeholder="Enter Author Name" ref={register} />
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="bookPrice" className="form-label">Add Price</label>
                        <input type="text" className="form-control" name="bookPrice" id="bookPrice" placeholder="Enter Price" ref={register} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="bookCoverPhoto" className="form-label">Add Book Cover Photo</label>
                        <input type="file" className="form-control" name="bookCoverPhoto" id="bookCoverPhoto" onChange={handleImageUpload} />
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AddBooks;