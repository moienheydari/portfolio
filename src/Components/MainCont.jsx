import React from 'react';
import '../css/MainCont.css';
import myLsit from '../Apis/fetchSiteList';

export default function MainCont() {
    let siteList = myLsit;

    return (
        <div className='MainCont'>
            <p className='title'>Project Websites</p>
            {siteList.map((site) => {
                return (
                    <a className='site' href={site.link} target='_blank'>{site.name}</a>
                )
            })}
        </div>
    )
}