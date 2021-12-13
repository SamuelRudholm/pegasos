import React from 'react';

export default function tick() {
    const element = (
        <div>
            <h3>This is an clock</h3>
            <div>
                It is {new Date().toLocaleDateString()}.
            </div>
        </div>
    );
}
setInterval(tick, 1000);