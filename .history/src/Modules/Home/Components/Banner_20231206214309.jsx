import React, { useEffect, useState } from 'react'
import { getBanners } from '../../../Apis/movieApi';
const Banner = () => {
    const [banners, setBanners] = useState([]); 
    useEffect(()=>{
        const getBanner = async ()=>{
            try {
                const banners = await await getBanners();
            } catch (error) {
                
            }
        } 
    
    }, []);
    return (
    <div>Banner</div>
  )
}

export default Banner