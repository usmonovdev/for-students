import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = (url) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const handleGetData = async () => {
        try {
            setIsLoading(true);
            const data = await axios.get(url);
            setIsLoading(false);
            setResponse(data.data);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetData()
    }, [url])
    
    return { response, isLoading }
};
