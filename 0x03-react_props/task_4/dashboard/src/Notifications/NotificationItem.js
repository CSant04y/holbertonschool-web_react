import React from 'react';
import PropTypes from 'prop-types';


const NotificationItem = (props) => {
    return (
        <li data-notification-type={props.type}
        dangerouslySetInnerHTML={props.html}
        className={props.className}
        >
            {props.value}
        </li>
    );
}
NotificationItem.defaultProps = {
    type: "default",
    className: 'urgent',
    type: 'urgent' 
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
}

export default NotificationItem;