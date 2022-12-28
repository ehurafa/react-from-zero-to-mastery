import { useState, useEffect } from 'react'

// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFecth] = useState(false)

    // 6 - loading
    const [loading, setLoading] = useState(false)

    // 7 - tratando erros
    const [error, setError] = useState(null)

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
        const fetchData = async () => {

        // 6 - loading
        setLoading(true)

            try {const res = await fetch(url)
                console.log('json ', res)

                const json = await res.json()


                setData(json)

            } catch (error) {
            console.log(error.message)
            setError('Houve algum erro ao carregar os dados')
            }

        setLoading(false)

    }

        fetchData()

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

    return { data, httpConfig, loading, error }
}