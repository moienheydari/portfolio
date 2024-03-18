import React, { useEffect, useState } from 'react';
import '../css/MainCont.css';
import fetchSiteList from '../Apis/fetchSiteList';
export default function MainCont() {
    const [siteList, setSetList] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const myList = await fetchSiteList();
            setSetList(myList)
        }
        
        fetchData()
    }, [])

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