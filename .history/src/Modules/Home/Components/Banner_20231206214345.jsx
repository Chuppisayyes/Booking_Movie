import React, { useEffect, useState } from 'react'
import { getBanners } from '../../../Apis/movieApi';
const Banner = () => {
    const [banners, setBanners] = useState([]); 
    useEffect(()=>{
        const getBanner = async ()=>{
            try {
                const banners = await getBanners();
                setBanner(banners)
            } catch (error) {
                thr
            }
        } 
    
    }, []);
    return (
    <div>Banner</div>
  )
}

export default Banner