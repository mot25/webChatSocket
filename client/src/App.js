import React, { useEffect, useState } from 'react';
import './App.css'
import EventSources from './EventSources';
import LongPulling from './LongPulling'



const App = () => {

    return (
        <div className="app">
            {/* <LongPulling /> */}
            <EventSources />
        </div>
    );
};

export default App;