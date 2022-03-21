import React from 'react';
import PropTypes from 'prop-types';

import './Notifications.css';
import closeIcon from '../assets/close-Icon.png';

import { getLatestNotification } from '../utils/utils.js';
import NotficationItem from './NotificationItem.js'
import NotificationItemShape from './NotificationItemShape.js';
import { StyleSheet, css } from 'aphrodite';


class Notifications extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    // markAsRead(id) {
    //     console.log(`Notification ${id} has been marked as read`);
    // }

    render() {
        let {
			displayDrawer,
			listNotifications,
			handleDisplayDrawer,
			handleHideDrawer,
            markNotificationAsRead,
		} = this.props;

        return (
            <React.Fragment>
            <div className={css(styles.MenuItem)} onClick={ handleDisplayDrawer }>
                <p>Your notifications</p>
            </div>
            {
                displayDrawer && (
                <div 
                    className={css(styles.Notifications)}>
                    <button style={{
                        right: '1%',
                        width: '32px',
                        height: '32px',
                        position: 'absolute',
                        background: 'none',
                        border: 'none',
                    }}
                    aria-label="Close"
                    onClick={ handleHideDrawer }
                    >
                        <img src={closeIcon} alt='close-icon' className={css(styles.ButtonImg)}>
                        </img>
                    </button>
                    {
						listNotifications.length === 0 &&
						<p>No new notification for now</p>
					}
                    {
                    listNotifications.length > 0 &&
                    <React.Fragment>
                    <p>Here is the list of notifications</p>
                    <ul>
                    {listNotifications.map((notification) => (
                        
                        <NotficationItem        
                            className={notification.type}  
                            key={notification.id}
                            id={notification.id}
                            type={notification.type}
                            value={notification.value}
                            html={notification.html}
                            markAsRead={markNotificationAsRead}
                        />

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
const styles = StyleSheet.create({
    Notifications: {
        border: "2px dashed #DF344B",
        height: "120px",
        width: "30%",
        position: "absolute",
        left: "66%",
        top: "16%",
    },
    ButtonImg: {
        height: "10px",
        width: "10px",
    },
    default: {
        color: "blue"
    },
    urgent: {
        color: "red"
    },
    MenuItem: {
        height: "6%",
        width: "12%",
        position: "absolute",
        left: "85%",
        top: "10%",
    }
});

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func,
	markNotificationAsRead: PropTypes.func,
}

Notifications.defaultProps = {
    listNotifications: [],
	handleDisplayDrawer: () => {},
	handleHideDrawer: () => {},
	markNotificationAsRead: () => {},
}

export default Notifications;
