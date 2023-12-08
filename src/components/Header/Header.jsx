import React from "react";
import Nav from "./Nav.jsx";
import Section from "../Converter/Section.jsx";
import style from "./style.module.css";
export default function Header() {
  const [items, setItems] = React.useState(null);
  React.useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className={style.main}>
      {items && <Nav dat={items} />}
      <Section dat={items} />
    </div>
  );
}
