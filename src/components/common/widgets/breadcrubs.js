import React from "react";
import { Link } from "gatsby";
import { connect } from "react-redux";

function Breadcrumb(props) {
  const {
    title = null,
    products,
    adClass,
    container = "container",
    productId,
    ...parent
  } = props;
  let path = [];
  let x;

  for (x in parent) {
    if ("function" !== typeof parent[x]) path.push(parent[x]);
  }
  return (
    <nav aria-label="breadcrumb" className={`breadcrumb-nav ${adClass}`}>
      <div className={container}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={`/`}>Home</Link>
          </li>
          {path.flat().map((item) => (
            <li className="breadcrumb-item" key={item}>
              <Link to={`/${item}`}>
                {item.split("/").length > 1
                  ? item.split("/")[1]
                  : item.split("/")[0]}
              </Link>
            </li>
          ))}
          {title !== "undefined" && (
            <li className="breadcrumb-item active" aria-current="page">
              {title ?? ""}
            </li>
          )}
        </ol>
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    products: state.data.products ? state.data.products : [],
  };
}

export default connect(mapStateToProps)(Breadcrumb);
