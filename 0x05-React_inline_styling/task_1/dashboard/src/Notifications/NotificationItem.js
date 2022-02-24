import React from 'react';
import PropTypes from 'prop-types';

// {type, value, html, className}
class NotificationItem extends React.Component {
    render() {
        let {
            id,
            type,
            value,
            html,
            className,
            markAsRead,
        } = this.props;
        
        if (!html) {
            return (
                <li data-notification-type={type}
                className={className}
                >{value}</li>
            )
        } else {
            return (
                <li data-notification-type={type}
                dangerouslySetInnerHTML={html}
                className={className}
                onClick={() => markAsRead(id)}
                ></li>
            );
        }
    }
}
NotificationItem.defaultProps = {
    type: "default",
    value: "",
    html: null,
    markAsRead: () => {},
    id: NaN
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.number
}

export default NotificationItem;