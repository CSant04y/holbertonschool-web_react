import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-Icon.png';
import { getLatestNotification } from '../utils/utils.js';
import NotficationItem from './NotificationItem.js'
const Notifications = () => {
    return (
        <div className='Notifications'>
            <button style={{
                top: '10px',
                right: '50px',
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
                {/* <li data-priority="default" id="default">New course available</li>
                <li data-priority="urgent" className='urgent'>New resume available</li>
                <li data-priority="urgent" className='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li> */}
            </ul>
        </div>
    );
};


export default Notifications;