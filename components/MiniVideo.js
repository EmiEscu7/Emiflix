import React, { Fragment } from 'react'
import SNKimg from '../images/snk-final.jpg'
import './styles/MiniVideo.css'


class MiniVideo extends React.Component{
    constructor(props){ 
        super(props)        
    }

    

    render() {
        const {key, title, description, img, video} = this.props
        return(
            <Fragment>
                <div className="contenedor-img">
                    <img src={img} className="video-img" />
                </div>        
            </Fragment>
        )
    }

}

export default MiniVideo