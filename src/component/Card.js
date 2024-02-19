import React from "react";
import "./card.css";

function Card(props) {
  return (
    <>
      <div className="card_db ">
        <div class="form-group ">
          <div className="box">
            <select id="selectOption">
              <option value="option1">Week</option>
              <option value="option2">Month</option>
              <option value="option3">Year</option>
            </select>
          </div>
        </div>
        <div className="cardView">
          <h3>{props.number}</h3>
          <h3>{props.task}</h3>
        </div>

        {/* <div className="bottom">
          <div className="taskNotification">
            <p style={{ color: "#86B6F6", fontSize: "12px" }}>"Genrate Invoice Vedatnta group"</p>
          </div>

          <div className="openicon" style={{ color: " #8b9399", marginLeft: "20px", marginTop: "15px" }}>
            <FaArrowRightFromBracket />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Card;
