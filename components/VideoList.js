import React, { Fragment } from 'react'
import MiniVideo from './MiniVideo'
import './styles/VideoList.css'
import lista from '../data.json'

class VideoList extends React.Component {

   
    render() {
        return (
            <div className="contenedor">
                <h1 className="title-vl">{this.props.title}</h1>
                <div className="list-video">
                    {lista.map((video) => {
                        return (
                            <MiniVideo 
                                key = {video.id}
                                {...video}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default VideoList