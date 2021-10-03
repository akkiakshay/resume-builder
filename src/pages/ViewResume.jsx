import React from 'react'
import { ResumePreview } from '../features/ResumePreview'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reset } from '../app/redux/sidebarSlice'
import { useNavigate } from 'react-router-dom'
export const ViewResume = () => {
    const history = useNavigate()
    const dispatch = useDispatch()
    const onClick = () => {
        history("/")
        dispatch(reset())
       
    }
    return (
        <div>
            <div className="text-center p-3 bg-light shadow">
                <Link to="/"><Button variant="primary" className="mr-2">Edit Resume</Button></Link>
                
                <Button  variant="success" className="ml-2" onClick={onClick}>Create New</Button>
            </div>
            <ResumePreview placeholder={`View`}/>
        </div>
    )
}
