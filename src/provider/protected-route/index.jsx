import React, { useContext ,useEffect} from 'react'
import { AuthContext } from '../../context'
import { Navigate,useNavigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
    const { firebaseUser , loading } = useContext(AuthContext)
    const { uid } = firebaseUser || {}
     const navigate = useNavigate()
    console.log(loading,uid)
        useEffect(() =>{
        if (!loading && !uid) {
            return navigate('/login')
        }
    }, [uid ,loading , navigate])
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


