import React, { useContext, useEffect, useState } from 'react';
import { LoggedInContext } from '../../App';
import Order from '../Order/Order';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    const [checkOut, setCheckOut] = useState([])
    const url = `https://pure-springs-85119.herokuapp.com/orders/${loggedInUser.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCheckOut(data))
    }, [])
    console.log(checkOut)
    return (
        <div>
            {
                checkOut.map(checkOut => <Order checkOut={checkOut}></Order>)
            }
        </div>
    );
};

export default Orders;