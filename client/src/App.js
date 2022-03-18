import React, { useEffect, useState } from 'react';
import './App.css'
import EventSources from './EventSources';
import LongPulling from './LongPulling'
import WebSources from './WebSources';



const App = () => {

    return (
        <div className="app">
            {/* <LongPulling /> */}
            {/* <EventSources /> */}
            <WebSources />
        </div>
    );
};

export default App;