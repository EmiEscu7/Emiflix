import React from 'react'
import './styles/Title.css'
import { Link } from 'react-router-dom'

const Title = () => (
    <Link to="../emiflix">
        <h1 className="title">EMIFLIX</h1>
    </Link>    
)

export default Title