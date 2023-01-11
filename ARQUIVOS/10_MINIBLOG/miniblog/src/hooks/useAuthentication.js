import {
    getAuth,
    createUserWithEmailAndPassword,
    signWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAutehtication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled () {
        if (cancelled) {
            return
        }
    }

}

