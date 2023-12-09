import React, { useEffect, useState } from 'react'
import { getBanners } from '../../../Apis/movieApi';
const Banner = () => {
    const [banners, setBanners] = useState([]); 
    const [isloading, setBanners] = useState([]); 
    useEffect(()=>{
        const getBanner = async ()=>{
            try {
                const banners = await getBanners();
                setBanners(banners)
            } catch (error) {
                console.error(error);
            };
        };
    }, []);
    return (
    <div>Banner</div>
  )
}

export default Banner