import React from "react";
// import { useQuery } from "@apollo/client";
// import { gql } from '@apollo/client';
// import { Media } from "reactstrap";
import {Link} from "gatsby";
// import language from "../../constant/langConfig.json";
// import i18next from "../../constant/i18n";
// import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
// import {Link} from  'react-router-dom'

// const GET_CURRENCY = gql`
//   query {
//     getCurrency {
//       currency
//       name
//       symbol
//       value
//     }
//   }
// `;

const Currency = ({ icon }) => {
  // var { data } = useQuery(GET_CURRENCY);
  // const Context = useContext(CurrencyContext);
  // const selectedCurrency = Context.currencyContext.selectedCurrency;

  // const changeLanguage = (lng) => {
  //   i18next.changeLanguage(lng);
  // };

  return (
    <li className="onhover-div mobile-setting">
      <div>
        {/* <Media src={'/assets/images/icon/avatar.png'} className="img-fluid" alt="" /> */}
        <i className="fa fa-user"></i>
      </div>
      <div className="show-div setting">
        <Link to={"#"}><h6>Login</h6></Link >
        
        <ul>
          {/* {language.map((item, i) => (
            <li key={i}>
              <a
                href={null}
                onClick={() => {
                  changeLanguage(item.val);
                }}
              >
                {item.lang}
              </Link >
            </li>
          ))} */}
        </ul>
        <Link to={"#"}><h6>Register</h6></Link >
        {/* <ul className="list-inline">
          {data &&
            data.getCurrency.map((cur, i) => (
              <li key={i}>
                <div onClick={() => selectedCurrency(cur)}>
                  {cur.symbol} {cur.currency}
                </div>
              </li>
            ))}
        </ul> */}
      </div>
    </li>
  );
};

export default Currency;
