import React from 'react';
import PropTypes from 'prop-types';

import './Notifications.css';
import closeIcon from '../assets/close-Icon.png';

import { getLatestNotification } from '../utils/utils.js';
import NotficationItem from './NotificationItem.js'
import NotificationItemShape from './NotificationItemShape.js';


class Notifications extends React.PureComponent {

    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        if(this.props.listNotifications.length < nextProps.listNotifications.length) {
            return true
        }
        return false
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        return (
            <React.Fragment>
            <div className='menuItem'><p>Your notifications</p></div>
            {
                this.props.displayDrawer && (
                <div className='Notifications'>
                    <button style={{
                        right: '1%',
                        width: '32px',
                        height: '32px',
                        position: 'absolute',
                        background: 'none',
                        border: 'none',
                    }}
                    aria-label="Close"
                   onClick={() => {
                       console.log("Close button has been clicked");
                   }}
                    ><img src={closeIcon} alt='close-icon' id="button-img"></img>
                    </button>
                    {
						this.props.listNotifications.length === 0 &&
						<p>No new notification for now</p>
					}
                    {
                    this.props.listNotifications.length > 0 &&
                    <React.Fragment>
                    <p>Here is the list of notifications</p>
                    <ul>
                    {this.props.listNotifications.map((notification, index) => (
                        <>
                        <NotficationItem        
                            className={notification.type}  
                            id={notification.id}          
                            key={index}
                            type={notification.type}
                            value={notification.value}
                            html={notification.html}
                            markAsRead={this.markAsRead}
                        />
                        </>
                    ))
                    }
                    </ul>
                    </React.Fragment>
                    }
                </div>
                )
            }
            </React.Fragment>
        );
    }
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
}
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
}

export default Notifications;
