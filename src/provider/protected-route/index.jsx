import React, { useContext } from 'react'
import { AuthContext } from '../../context'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
    const { firebaseUser , loading } = useContext(AuthContext)
    const { uid } = firebaseUser || {}
    console.log(loading,uid)
    
    if(loading && uid === undefined){
        console.log("running")
       return <Navigate to='/login' replace />
    }

    if (loading) {
        return <div>Loading....</div>
    } 
    return (
        uid ? <>{children}</> : <Navigate to='/login' replace />
    )
}