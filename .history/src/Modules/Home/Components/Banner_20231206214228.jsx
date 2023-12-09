import React, { useEffect, useState } from 'react'
import { getBanners } from '../../../Apis/movieApi';
const Banner = () => {
    const [banners, setBanners] = useState([]); 
    useEffect(()=>{
        const getBanner = as await getBanners();
    
    }, []);
    return (
    <div>Banner</div>
  )
}

export default Banner