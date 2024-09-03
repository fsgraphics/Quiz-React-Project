import { useEffect, useState } from 'react';
import {createClient} from "pexels";

const usePexelsapi = () => {
    const [loading, setLoading] = useState(true);
    const [currentPhotos, setCurrentPhotos] =useState(null)

    useEffect(()=>{
        const client = createClient('Oq35bjwHJJWsD3oVLXKDMfzHO8hyxfVoLBEoe8VfR6UwO2yXrJnSR21D');
        client.photos[0].curated().then((res)=>{
            console.log(res);
            setCurrentPhotos(res.photos[0])
        }).catch((err) => console.log(err)).finally(()=> setLoading(false));
    },[])
    return {
        loading,
        currentPhotos
    }
};

export default usePexelsapi;