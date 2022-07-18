import React, { Fragment } from 'react';
import {Link} from 'gatsby';
import Logo from './logo.png'

const LogoImage = () => {
    return (
        <Fragment>
            <Link href={'/'} >
                <a>
                    <img src={Logo} width={150} alt="" className="img-fluid" />
                </a>
            </Link>
        </Fragment>
    )
}

export default LogoImage;