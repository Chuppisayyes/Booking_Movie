import React, { useEffect, useState } from 'react'
import { getBanners } from '../../../Apis/movieApi';
const Banner = () => {
    const [banners, setBanners] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 
    useEffect(()=>{
        const getBanner = async ()=>{
            try {
                const banners = await getBanners();
                setBanners(banners)
            } catch (error) {
                console.error(error);
            } f
        };
    }, []);
    return (
    <div>Banner</div>
  )
}

export default Banner