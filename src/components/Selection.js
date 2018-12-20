import React from 'react';
import axios from 'axios';
import './Selection.css';


const Selection = (props) => {

  const title = props.selectedMovie
  const customerId = props.selectedCustomer.id

  const today = new Date();
  today.setDate(today.getDate() +1 );
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const dueDate = `${year}-${month}-${day}`

  const url = `http://localhost:3000/rentals/${title}/check-out?customer_id=${customerId}&due_date=${dueDate}`

  const createNewRental = () => {
    axios.post(url)
      .then((response) => {
        console.log(`Successfully created new rental`);
      })
      .catch((error) => {
        console.log('Your shit is all messed up!');
      });
  }

  return (
    <section>
      <div className="selections">
      <p>
        Selected Movie:
        <span>{props.selectedMovie}</span>
      </p>
      <p>
        Selected Customer:
        <span>{props.selectedCustomer.name ? props.selectedCustomer.name : props.selectedCustomer}</span>
      </p>
      </div>
      <button type="button"
        className="btn btn-primary btn-lg"
        onClick={createNewRental}>Check Out New Rental</button>
    </section>
  )
}

export default Selection;
