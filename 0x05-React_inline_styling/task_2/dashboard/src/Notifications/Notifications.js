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
            <div className={css(styles.MenuItem)}><p>Your notifications</p></div>
            {
                this.props.displayDrawer && (
                <div className={css(styles.Notifications)}>
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
                    ><img src={closeIcon} alt='close-icon' className={css(styles.ButtonImg)}></img>
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
}
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
}

export default Notifications;
