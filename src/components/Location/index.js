import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
            <div className='location_wrapper'>
               
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9933.114606366042!2d-0.17870615705867748!3d51.50810362416249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1af6c4f49b4bd0c!2sHyde%20Park!5e0!3m2!1sen!2sca!4v1584498100573!5m2!1sen!2sca" 
                        width="100%" 
                        height="500px" 
                        frameBorder="0" 
                        allowFullScreen="" 
                        aria-hidden="false" 
                        tabindex="0">
                </iframe>
                
                <div className='location_tag'>
                    <div>
                        Location
                    </div>
                </div>
            </div>
        );
    }
}

export default Location;