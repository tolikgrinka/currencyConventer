import React from "react";
import style from "./section.module.css";

export default function Section({ dat }) {
  const [convert, setConvert] = React.useState();
  const [unconvert, setUnconvert] = React.useState();
  const [select, setSelect] = React.useState("");
  const [exchange, setExchange] = React.useState("");

  const currency = (e) => {
    setSelect(e.target.value);
  };
  const currencyExchange = (e) => {
    setExchange(e.target.value);
  };
  const func1 = (e) => {
    if (exchange === "USD" && select === "USD") {
      setUnconvert(e.target.value);
    } else if (exchange === "USD" && select === "UAH") {
      setUnconvert((e.target.value * dat[24].rate).toFixed(2));
    } else if (exchange === "USD" && select === "PLN") {
      setUnconvert((e.target.value * 4).toFixed(2));
    } else if (exchange === "USD" && select === "EUR") {
      setUnconvert((e.target.value - e.target.value * 0.07).toFixed(2));
    } else if (exchange === "UAH" && select === "UAH") {
      setUnconvert(e.target.value);
    } else if (exchange === "UAH" && select === "PLN") {
      setUnconvert((e.target.value * 0.11).toFixed(2));
    } else if (exchange === "UAH" && select === "USD") {
      setUnconvert((e.target.value / dat[24].rate).toFixed(2));
    } else if (exchange === "UAH" && select === "EUR") {
      setUnconvert((e.target.value / dat[31].rate).toFixed(2));
    } else if (exchange === "EUR" && select === "EUR") {
      setUnconvert(e.target.value);
    } else if (exchange === "EUR" && select === "PLN") {
      setUnconvert((e.target.value * 4.33).toFixed(2));
    } else if (exchange === "EUR" && select === "UAH") {
      setUnconvert((e.target.value * dat[31].rate).toFixed(2));
    } else if (exchange === "EUR" && select === "USD") {
      setUnconvert((e.target.value * 1.07).toFixed(2));
    } else if (exchange === "PLN" && select === "USD") {
      setUnconvert((e.target.value * 0.25).toFixed(2));
    } else if (exchange === "PLN" && select === "EUR") {
      setUnconvert((e.target.value * 0.27).toFixed(2));
    } else if (exchange === "PLN" && select === "UAH") {
      setUnconvert((e.target.value * dat[32].rate).toFixed(2));
    } else if (exchange === "PLN" && select === "PLN") {
      setUnconvert(e.target.value);
    } else if (select === "GBP" && exchange === "UAH") {
      setUnconvert((e.target.value * dat[23].rate).toFixed(2));
    } else if (select === "GBP" && exchange === "USD") {
      setUnconvert((e.target.value * 1.26).toFixed(2));
    } else if (select === "GBP" && exchange === "EUR") {
      setUnconvert((e.target.value * 1.17).toFixed(2));
    } else if (select === "GBP" && exchange === "PLN") {
      setUnconvert((e.target.value * 5.05).toFixed(2));
    } else if (select === "GBP" && exchange === "GBP") {
      setUnconvert(e.target.value.toFixed(2));
    } else {
      setUnconvert(null);
    }
  };
  const func = (e) => {
    if (select === "USD" && exchange === "USD") {
      setConvert(e.target.value);
    } else if (select === "USD" && exchange === "UAH") {
      setConvert((e.target.value * dat[24].rate).toFixed(2));
    } else if (select === "USD" && exchange === "PLN") {
      setConvert((e.target.value * 4).toFixed(2));
    } else if (select === "USD" && exchange === "EUR") {
      setConvert((e.target.value - e.target.value * 0.07).toFixed(2));
    } else if (select === "UAH" && exchange === "UAH") {
      setConvert(e.target.value);
    } else if (select === "UAH" && exchange === "PLN") {
      setConvert((e.target.value * 0.11).toFixed(2));
    } else if (select === "UAH" && exchange === "USD") {
      setConvert((e.target.value / dat[24].rate).toFixed(2));
    } else if (select === "UAH" && exchange === "EUR") {
      setConvert((e.target.value / dat[31].rate).toFixed(2));
    } else if (select === "EUR" && exchange === "EUR") {
      setConvert(e.target.value);
    } else if (select === "EUR" && exchange === "PLN") {
      setConvert((e.target.value * 4.33).toFixed(2));
    } else if (select === "EUR" && exchange === "UAH") {
      setConvert((e.target.value * dat[31].rate).toFixed(2));
    } else if (select === "EUR" && exchange === "USD") {
      setConvert((e.target.value * 1.07).toFixed());
    } else if (select === "PLN" && exchange === "USD") {
      setConvert((e.target.value * 0.25).toFixed(2));
    } else if (select === "PLN" && exchange === "EUR") {
      setConvert((e.target.value * 0.27).toFixed(2));
    } else if (select === "PLN" && exchange === "UAH") {
      setConvert((e.target.value * dat[32].rate).toFixed(2));
    } else if (select === "PLN" && exchange === "PLN") {
      setConvert(e.target.value);
    } else if (select === "GBP" && exchange === "UAH") {
      setConvert((e.target.value / dat[23].rate).toFixed(2));
    } else if (select === "GBP" && exchange === "USD") {
      setConvert((e.target.value / 1.26).toFixed(2));
    } else if (select === "GBP" && exchange === "EUR") {
      setConvert((e.target.value / 1.17).toFixed(2));
    } else if (select === "GBP" && exchange === "PLN") {
      setConvert((e.target.value / 5.05).toFixed(2));
    } else if (select === "GBP" && exchange === "GBP") {
      setConvert(e.target.value.toFixed(2));
    } else {
      setConvert(null);
    }
  };

  return (
    <div className={style.section}>
      <h1>Спочатку виберіть валюти</h1>
      <input
        type="number"
        placeholder="Введіть суму"
        onChange={func}
        value={unconvert !== null ? unconvert : null}
        className={style.input}
        onClick={(e) => setUnconvert(null) || (e.target.value = null)}
      />

      <select value={select} onChange={currency}>
        <option>Виберіть валюту</option>
        <option value="UAH">Гривня(UAH)</option>
        <option value="USD">Долар США(USD)</option>
        <option value="EUR">Євро(EUR)</option>
        <option value="PLN">Злотий(PLN)</option>
        <option value="GBP">Фунт стерлінгів(GBP)</option>
      </select>
      <h2>Конвертувати в...</h2>
      <select value={exchange} onChange={currencyExchange}>
        <option>Виберіть валюту</option>
        <option value="UAH">Гривня(UAH)</option>
        <option value="USD">Долар США(USD)</option>
        <option value="EUR">Євро(EUR)</option>
        <option value="PLN">Злотий(PLN)</option>
        <option value="GBP">Фунт стерлінгів(GBP)</option>
      </select>
      <input
        type="text"
        value={convert !== null ? convert : null}
        className={style.input}
        onChange={func1}
        onClick={(e) => setConvert(null) || (e.target.value = null)}
      />
    </div>
  );
}
