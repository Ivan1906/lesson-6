import React from 'react';
import PageTemplate from '../';

const HistoryStory = ({location}) =>
    <PageTemplate>
        <div className="error-404">
            <h1>Ресурс за '{location.pathname}' не знайдений!!!</h1>
        </div>
    </PageTemplate>

export default HistoryStory; 