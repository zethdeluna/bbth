import React from 'react';

function LocationsMobile() {
    return (
        <div id="locationsMobile">
            <ul id="addresses">
                <li>
                    <ul>
                        <li>
                            <span className="locationName">Northridge</span>
                            <br/>
                            <span className="locationDescription">9663 Reseda Blvd</span>
                            <br/>
                            <span className="locationDescription">Northridge, CA 91324</span>
                            <br/>
                            <span className="locationDescription">(818) 280 - 6677</span>
                        </li>
                        {/* <li>
                            <br/>
                            Monday &mdash; Sunday
                        </li> */}
                    </ul>
                </li>
                <li>
                    <span className="locationName">Winnetka</span>
                    <br/>
                    <span className="locationDescription">8316 Winnetka Ave</span>
                    <br/>
                    <span className="locationDescription">Winnetka, CA 91306</span>
                    <br/>
                    <span className="locationDescription">(818) 772 - 6900</span>
                </li>
                <li>
                    <span className="locationName">Chatsworth</span>
                    <br/>
                    <span className="locationDescription">20790 Nordhoff St</span>
                    <br/>
                    <span className="locationDescription">Chatsworth, CA 91311</span>
                    <br/>
                    <span className="locationDescription">(818) 280 - 3362</span>
                </li>
            </ul>
        </div>
    )
}

export default LocationsMobile