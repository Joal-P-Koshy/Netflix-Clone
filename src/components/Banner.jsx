import React, { useEffect, useState } from 'react'
import instance from '../instance'
import { ListItem } from '@material-ui/core';
import './banner.css'

function Banner({ fetchUrl }) {
  
  const base_url = "https://image.tmdb.org/t/p/original";

  const [allBanner, setAllBanner] = useState([]);


  const fetchData = async () => {
    const response = await instance.get(fetchUrl);
    const { data } = response;
    setAllBanner(data.results[Math.floor(Math.random()*data.results.length)]);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div style={{height:"550px", backgroundImage:`url(${base_url}${allBanner.backdrop_path})`, backgroundPosition:"center", backgroundSize:"cover"}}>
        <div className='banner_content'>
          <h2>{allBanner?.name}</h2>

            <button className='btn btn-danger'>Play <i class="fa-solid fa-play bg-transparent"></i></button>
            <button className='btn border-white ms-3  more'>More info <i class="fa-solid fa-caret-down bg-transparent"></i></button>
          <h5>{allBanner?.overview?.slice(0,150)}...</h5>
        </div>
      </div>
    </div>
  )
}

export default Banner