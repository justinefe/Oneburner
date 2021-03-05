import React from "react";
import NavDropOption from "./NavDropOption";
import integration from "../../assets/integration.png";
import bag from "../../assets/bag.png";
import store from "../../assets/store.png";
import questions from "../../assets/questions.png";
import "./NavDrop.scss";
const NavDrop = React.forwardRef(({ ...props }, dropRef) => {
  return (
    <div ref={dropRef} className="navdrop">
      <NavDropOption
        image={bag}
        title="Clients"
        descrition="See the amazing team that uses Oneburner"
      />
      <NavDropOption
        image={store}
        title="Oneburner Stores"
        descrition="Explore our ready made solutions to expand your business"
      />
      <NavDropOption
        image={integration}
        title="Integrations"
        descrition="Connect different solution to Oneburner and get more done"
      />
      <NavDropOption
        image={questions}
        title="Why Oneburner?"
        descrition="Learn more about our features, success rates, benefits and demo"
      />
    </div>
  );
});

export default NavDrop;
