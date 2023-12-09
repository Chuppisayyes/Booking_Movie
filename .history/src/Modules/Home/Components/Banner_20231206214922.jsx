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
            } finally{
                setIsLoading(false);
            }
        };

        getBanner();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
    <div>

        
    </div>
  )
}

export default Banner