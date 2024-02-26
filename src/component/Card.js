import React from "react";
import "./card.css";

function Card(props) {
  return (
    <>
      <div className="card_db ">
        
        <div className="cardView">
          <h3 style={{ fontSize: '30px' }}>{props.number}</h3>
          <h3 style={{fontSize:'15px'}}>{props.task}</h3>

        </div>
        <div class="form-group ">
         <select style={{border:'none', width:'80px'}}>
          <option selected>Today</option>
          <option>Tomorow</option>
          <option>Day after Tomorow</option>
          <option>In a week</option>
         </select>
        </div>
      </div>
    </>
  );
}

export default Card;



 {/* <div className="box">
 <select id="selectOption" style={{ border: '1px solid black', float: 'right', marginTop: '2px' }}>
 <option value="option1">Week</option>
 <option value="option2">Month</option>
 <option value="option3">Year</option>
</select>
</div> */}