import { useState, useEffect } from 'react'

export const useDate = (date) => {
    const [current, setCurrent] = useState(null)

    useEffect(() => {
        const newDate = new Date(date);

        setCurrent(newDate.toLocaleString())
    }, [date]) 

    return current;
}
