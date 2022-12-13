import { useState, useEffect } from 'react'

// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFecth] = useState(false)

    // 6 - loading
    const [loading, setLoading] = useState(false)

    const httpConfig = (data, method) => {
        console.log('foo ', data, method)
       if(method === 'POST') {
        setConfig({
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        setMethod(method)
       } 
    }

    // 5 - post refactory
    const [config, setConfig] = useState(null)

    useEffect(() => {

        // 6 - loading
        setLoading(true)

        const fetchData = async () => {

            const res = await fetch(url)

            const json = await res.json()

            setData(json)
        }

        fetchData()
        setLoading(false)

    }, [url, callFetch])

    // 5 - post refactory
    useEffect(() => {

        const httpRequest = async () => {
            if(method === 'post') {
                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions)
                const json = await res.json()
    
                setCallFecth(json)
            }
        }

        httpRequest()

    }, [config, method, url])

    return { data, httpConfig, loading }
}