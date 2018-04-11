import React from 'react';

const Error404 = ({location}) =>
    <div className="error-404">
        <h1>Ресурс за '{location.pathname}' не знайдений!!!</h1>
    </div>

export default Error404; 