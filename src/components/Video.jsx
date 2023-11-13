import React from 'react';
import DateTime from './DateTime';
import withDateTime from './WithDateTime';

const DateTimeUpg = withDateTime(DateTime);

export default function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimeUpg date={props.date} />
        </div>
    )
}