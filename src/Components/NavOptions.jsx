import React, { useState, useEffect } from "react";
import "../Styles/NavOptions.css";
import NavOptionCard from "../Components/NavOptionCard.jsx";

const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
}) => {
  const [miPhoneToggle, setmiPhoneToggle] = useState(false);
  const [redmiPhonesToggle, setredmiPhonesToggle] = useState(false);
  const [tvToggle, settvToggle] = useState(false);
  const [laptopToggle, setlaptopToggle] = useState(false);
  const [fitnessAndLifeStyleToggle, setfitnessAndLifeStyleToggle] =
    useState(false);
  const [homeToggle, sethomeToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/miPhones") {
      return setmiPhoneToggle(true);
    }
    if (window.location.pathname === "/redmiphons") {
      return setredmiPhonesToggle(true);
    }
    if (window.location.pathname === "/tv") {
      return settvToggle(true);
    }
    if (window.location.pathname === "/laptops") {
      return setlaptopToggle(true);
    }
    if (window.location.pathname === "/lifestyle") {
      return setfitnessAndLifeStyleToggle(true);
    }
    if (window.location.pathname === "/home") {
      return sethomeToggle(true);
    }
  }, []);

  return (
    <div className="navOptionContainer">
      {miPhoneToggle
        ? miPhones.map((item, index) => (
            <NavOptionCard
              image={item.image}
              name={item.name}
              price={item.price}
              key={index}
            />
          ))
        : null}
      {redmiPhonesToggle
        ? redmiPhones.map((item, index) => (
            <NavOptionCard
              image={item.image}
              name={item.name}
              price={item.price}
              key={index}
            />
          ))
        : null}
      {tvToggle
        ? tv.map((item, index) => (
            <NavOptionCard
              image={item.image}
              name={item.name}
              price={item.price}
              key={index}
            />
          ))
        : null}
      {laptopToggle
        ? laptop.map((item, index) => (
            <NavOptionCard
              image={item.image}
              name={item.name}
              price={item.price}
              key={index}
            />
          ))
        : null}
      {fitnessAndLifeStyleToggle
        ? fitnessAndLifeStyle.map((item, index) => (
            <NavOptionCard
              image={item.image}
              name={item.name}
              price={item.price}
              key={index}
            />
          ))
        : null}

      {homeToggle
        ? home.map((item, index) => (
            <NavOptionCard
              image={item.image}
              name={item.name}
              price={item.price}
              key={index}
            />
          ))
        : null}
    </div>
  );
};

export default NavOptions;
