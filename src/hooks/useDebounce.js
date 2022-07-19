import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

function useDebounce(value, delay) {

    const [debounce, setDebounce] = useState(value)

    useEffect(() => {
        const handle = setTimeout(() => {
            setDebounce(value)
        }, delay);

        return () => clearTimeout(handle)

    }, [value])

    return debounce;
}

useDebounce.propTypes = {
    value: PropTypes.object.isRequired,
    delay: PropTypes.number
}

export default useDebounce;