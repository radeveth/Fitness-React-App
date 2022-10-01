import { useState, useEffect } from "react";

const useFetch = (url, options) => {
    const [state, setState] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(url, options)
            .then(response => response.json())
            .then(data => setState(data))
            .catch(error => setError(error));
    }, []);

    return state;
};

export default useEffect;