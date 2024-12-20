import { useEffect, useState } from "react";

// Custom Hook
export const useApi = (url) => {

    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setData(json))
    }, [url]);

    return {data};
}