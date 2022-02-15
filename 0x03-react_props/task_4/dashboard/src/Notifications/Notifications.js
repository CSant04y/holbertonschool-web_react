import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-Icon.png';
import { getLatestNotification } from '../utils/utils.js';
import NotficationItem from './NotificationItem.js'
import PropTypes from 'prop-types';
const Notifications = ({ displayDrawer }) => {
    return (
        <React.Fragment>
        <div className='menuItem'><p>Your notifications</p></div>
        {
            displayDrawer && (
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
                <p>Here is the list of notifications</p>
                <ul>
                    <NotficationItem 
                    className="default"
                    type='default' 
                    value='New course available'
                    />
                    <NotficationItem 
                    className='urgent'
                    type='urgent' 
                    value='New resume available'
                    />
                    <NotficationItem 
                    className='urgent'
                    type='urgent' 
                    html={{__html: getLatestNotification()}}
                    />
                </ul>
            </div>
            )
        }
        </React.Fragment>
    );
};

Notifications.defaultProps = {
    displayDrawer: false
}
Notifications.propTypes = {
    displayDrawer: PropTypes.bool
}

export default Notifications;