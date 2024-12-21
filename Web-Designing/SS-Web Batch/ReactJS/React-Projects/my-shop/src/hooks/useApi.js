import { useEffect, useState } from "react";

// Custom Hook
export const useApi = (url) => {
    const controller = new AbortController();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, SetError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData(null);
        SetError(null);
        fetch(url)
            .then(res => {
                console.log(res);
                
                if (!res.ok){
                    SetError("Something Went Wrong... " + res.statusText);
                }
                return res.json();
            }) //server based err
            .then(json => setData(json))
            .catch(err => {
                console.log(err);
                SetError("Something went wrong... " + err.message);
            })
            .finally(() => {
                setLoading(false);
            })

            return () => {
                controller.abort();
            }
    }, [url]);

    return {data, loading, error};
}