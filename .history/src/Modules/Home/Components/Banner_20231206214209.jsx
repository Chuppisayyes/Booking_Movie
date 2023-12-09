import React, { useEffect, useState } from 'react'
import { getBanners } from '../../../Apis/movieApi';
const Banner = () => {
    const [banners, setBanners] = useState([]); 
    useEffect(()=>{
        const getBanner = await getBanners();
    
    }, []);
    return (
    <div>Banner</div>
  )
}

export default Banner