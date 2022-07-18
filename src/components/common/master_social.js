import React from "react";
import { Link } from "gatsby";

const MasterSocial = (props) => {
  return (
    <ul className="product-social">
      <li>
      <Link
              to={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' && window.location.href}/`}
              className="social-icon"
              title="Facebook"
              target="_blank"
            >
              <i className="fa fa-facebook"></i>
            </Link>
      </li>
      <li>
        <Link href={`http://pinterest.com/pinthis?url=${typeof window !== 'undefined' && window.location.href}`} target="_blank">
          <i className="fa fa-pinterest"></i>
        </Link>
      </li>
      <li>
      <Link
              to={`http://twitter.com/intent/tweet?text=${encodeURIComponent(
                `Hey Checkout ${props.item.title}`
              )};url=${encodeURIComponent( typeof window !== 'undefined' && window.location.href)}/`}
              className="social-icon"
              title="Instagram"
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
            </Link>
      </li>
      {/* <li>
        <Link href="https://www.instagram.com" target="_blank">
          <i className="fa fa-instagram"></i>
        </Link>
      </li>
      <li>
        <Link href="https://rss.com" target="_blank">
          <i className="fa fa-rss"></i>
        </Link>
      </li> */}
    </ul>
  );
};

export default MasterSocial;
