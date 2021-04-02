import React from 'react';

const Order = (props) => {
    console.log(props.checkOut)
    const { _id, checkOut, email } = props.checkOut;
    console.log("order", checkOut)
    checkOut.map(order => console.log(order.bookDetails.bookName))
    return (
        <div className="card m-4 p-3 bg-light shadow-lg rounded">
            <div className="card-header">
                <h4 className="text-center">Your Order ID: {_id}</h4>
            </div>
            <div className="card-body">
                <table className="table table-striped table-dark table-bordered">
                    <thead>
                        <tr className="bg-success">
                            <th scope="col">Book Name</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            checkOut.map(order =>
                                <tr >
                                    <td>
                                        {order.bookDetails.bookName}
                                    </td>
                                    <td>
                                        {order.bookDetails.authorName}
                                    </td>
                                    <td>
                                        {order.bookDetails.bookPrice}
                                    </td>

                                </tr>
                                )
                        }
                    </tbody>
                </table>

            </div>

        </div>

    );
};

export default Order;