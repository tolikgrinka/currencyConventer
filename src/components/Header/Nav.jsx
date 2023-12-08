// For header I take more currency, it looks better)

import style from "./style.module.css";
import img from "./unnamed.png";
const Nav = ({ dat }) => {
  return (
    <header>
      <div className={style.nav}>
        <img src={img} className={style.img} alt="logo" />
        <h1>Currency Conventer</h1>
        {dat.map((item, index) => (
          <div key={index} className={style.cur}>
            <h3 key={index + 2} className={style.p}>
              {item.txt === "Долар США" ||
              item.txt === "Євро" ||
              item.txt === "Фунт стерлінгів" ||
              item.txt === "Злотий"
                ? item.txt + ": "
                : null}
            </h3>
            <h4 key={index + 1} className={style.curText}>
              {item.cc === "EUR" ||
              item.cc === "USD" ||
              item.cc === "GBP" ||
              item.cc === "PLN"
                ? "1 " + item.cc + " = " + item.rate.toFixed(2) + " UAH"
                : null}
            </h4>
          </div>
        ))}
      </div>
    </header>
  );
};
export default Nav;
