import React from "react";
import Card from "../component/Card";
import { AiOutlineUser } from "react-icons/ai";

function CardView() {
  return (
    <div className="cardView">
      {/* //!card first view */}
      <div className="view col-12" style={{ paddingBottom: "22px" }}>
        <div className="menuli col-12 " style={{ marginLeft: "15px", width: "20px" }}>
          <h5>Insights</h5>
        </div>
        <div className="cardView1 col-12" style={{ marginLeft: "15px", display: "flex" }}>
          <div className="jobs col-1">
            <h6>Jobs</h6>
          </div>
          <div className="select col-11 " style={{ marginLeft: "-14%", marginTop: "-0.5%" }}>
            <div class="form-group " style={{ width: "40%" }}>
              <div className="box">
                <select id="selectOption">
                  <option value="option1">All members</option>
                  <option value="option2">Self</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="reportcard col-12" style={{ marginLeft: "15px", display: "flex" }}>
          <div className="card1  col-3" style={{ marginLeft: "0px" }}>
            <Card task="Overdue" number="1787" />
          </div>
          <div className="card1  col-3" style={{ marginLeft: "10px" }}>
            <Card task="Acoount" number="10" />
          </div>
          <div className="card1  col-3" style={{ marginLeft: "10px" }}>
            <Card task="Acoount" number="10" />
          </div>
          <div className="card1  col-3" style={{ marginLeft: "10px" }}>
            <Card task="Acoount" number="10" />
          </div>
        </div>
      </div>
      {/* //!card second view */}
      {/* <div className="view col-12 " style={{ marginTop: "0%" }}>
        <div className="cardView1 col-12" style={{ marginLeft: "15px", display: "flex" }}>
          <div className="jobs col-2">
            <h6>Pending client activity</h6>
          </div>
          <div className="select col-10 " style={{ marginLeft: "-14%", marginTop: "-0.5%" }}>
            <div class="form-group " style={{ width: "40%" }}>
              <div className="box">
                <select id="selectOption">
                  <option value="option1">All members</option>
                  <option value="option2">Self</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="reportcard col-12" style={{ marginLeft: "15px", display: "flex" }}>
          <div className="card1  col-3" style={{ marginLeft: "0px" }}>
            <Card task="Overdue" number="1787" />
          </div>
          <div className="card1  col-3" style={{ marginLeft: "10px" }}>
            <Card task="Acoount" number="10" />
          </div>
          <div className="card1  col-3" style={{ marginLeft: "10px" }}>
            <Card task="Acoount" number="10" />
          </div>
          <div className="card1  col-3" style={{ marginLeft: "10px" }}>
            <Card task="Acoount" number="10" />
          </div>
        </div>
      </div> */}
      {/* //!card third view */}
      <div className="view col-12">
        <div className="cardView1 col-12" style={{ margin: "15px", display: "flex" }}>
          <div className="topOption col-4" style={{ display: "flex" }}>
            <div>
              <h6>Task:To do</h6>
            </div>
            <div>
              <AiOutlineUser />
            </div>
            <div>
              <select id="selectOption">
                <option value="option1">To Day</option>
                <option value="option2">Month</option>
                <option value="option2">Year</option>
              </select>
            </div>

            <div>
              <AiOutlineUser />
            </div>

            <div>
              <select id="selectOption">
                <option value="option1">All mebers</option>
                <option value="option2">Self</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardView;
