import React from 'react';

const Customer = (props) => {
  const {
    id,
    name,
    registered_at,
    address,
    city,
    state,
    postal_code,
    phone,
    account_credit,
    movies_checked_out_count
  } = props.customer;

  return (
    <li key={id}>
    <h3>{name}</h3>
    <p>{movies_checked_out_count} movies checked out</p>
    <input type="button" value="Select for Rental"/>
    </li>

  );
};


export default Customer
