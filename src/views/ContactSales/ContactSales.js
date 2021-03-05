import React from "react";
import Address from "../../components/Address";
import Button from "../../components/RoundedBtn/Button";
import "./ContactSales.scss";

const ContactSales = () => {
  return (
    <div className="ContactSales">
      <div className="ContactSales_left">
        <form>
          <div className="ContactSales_left_double">
            <div className="lastname">
              <label htmlFor="">Last Name</label>
              <div className="username">
                <input type="text" />
              </div>
            </div>
            <div className="lastname">
              <label htmlFor="">First Name</label>
              <div className="username">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="ContactSales_left_single">
            <label htmlFor="">Work Email</label>
            <div className="login_email">
              <input type="text" />
            </div>
          </div>
          <div className="ContactSales_left_double">
            <div className="lastname">
              <label htmlFor="">Company Name</label>
              <div className="username">
                <input type="text" />
              </div>
            </div>
            <div className="lastname">
              <label htmlFor="">Company Size</label>
              <div className="username">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="ContactSales_left_single">
            <label htmlFor="">How can our expert help you?</label>
            <div className="username_long">
              <input type="text" />
            </div>
          </div>
          <div className="buttonWrap"></div>
          <button>Contact Us</button>
        </form>
      </div>
      <div className="ContactSales_right">
        <h2>Request a call from an expert</h2>
        <p>
          Having thoughts on which product works best for you? Fill the form and
          our expert will reach out to you.
        </p>
        <h2>Our offices around Africa</h2>
        <div className="ContactSales_right_address">
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />{" "}
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />{" "}
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />{" "}
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />{" "}
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />{" "}
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />{" "}
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />{" "}
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />{" "}
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />
          <Address
            country="TANZANIA"
            number="Mbezi Beach, P.O.B: 70339"
            street="Dar Salam"
            phone="+255-(0)-222120119"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSales;
