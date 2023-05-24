import React from 'react'
import "./bookingstyle.css"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


// From the API 
const seededRandom = function (seed) {
   var m = 2**35 - 31;
   var a = 185852;
   var s = seed % m;
   return function () {
       return (s = s * a % m) / m;
   };
}

const fetchAPI = function(date) {
   let result = [];
   let random = seededRandom(date.getDate());

   for(let i = 17; i <= 23; i++) {
       if(random() < 0.5) {
           result.push(i + ':00');
       }
       if(random() < 0.5) {
           result.push(i + ':30');
       }
   }
   return result;
};
const submitAPI = function(formData) {
   return true;
};


const BookingForm = () => {
   let [date, setDate] = useState(new Date().toLocaleDateString());
   let [time, setTime] = useState("17:00")
   let [guests, setGuests] = useState(1)
   let [occasion, setOccasion] = useState("Birthday")

   const navigate = useNavigate();
   const handleSubmit = (e) => {
      
      const value = submitAPI(e);
      if(value){
         alert("Submission successful")
      }
      navigate("/")

   }

   return (
      <form className='formContainer'> <label for="res-date">Choose date</label>
         <input type="date" id="res-date" onChange={(e) => { setDate(e.target.value) }} />
         <label for="res-time">Choose time</label>
         <select onChange={(e) => { setTime(e.target.value) }} id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
         </select>
         <label for="guests">Number of guests</label>
         <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => { setGuests(e.target.value) }} />
         <label for="occasion">Occasion</label>
         <select id="occasion" onChange={(e) => { setOccasion(e.target.value) }}>
            <option>Birthday</option>
            <option>Anniversary</option>
         </select>
         <input className='submitButton' type="submit" value="Make Your reservation" onClick={(e) => {handleSubmit(e)}}></input>
         <Link className='submitButton' to={"/"}>Cancel booking</Link>
      </form>

   )
}

export default BookingForm;