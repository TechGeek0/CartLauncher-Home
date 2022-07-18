import React from 'react';

import { safeContent } from '../../../utils';

function IconBox( props ) {
    const { boxStyle, iconClass, title, text, style } = props;

    return (
        <div className={ `icon-box ${boxStyle}` }>
            <span className={ `icon-box-icon` }>
                <i style={style} className={ iconClass }></i>
            </span>

            <div className="icon-box-content">
                <h3 className="icon-box-title text-bold">{ title }</h3>
                <p dangerouslySetInnerHTML={ safeContent( text ) }></p>
            </div>
        </div>
    )
}

export default React.memo( IconBox );
