import { render } from '@testing-library/react'
import React, { Fragment } from 'react'
import Title from '../components/Title'
import BarList from '../components/BarList'
import MiniVideo from '../components/MiniVideo'
import VideoList from '../components/VideoList'

class PrincipalPage extends React.Component {

    render() {
        return (
            <Fragment>
                <Title />

                <BarList/>

                <VideoList 
                    title = "Series"
                />
            </Fragment>
        )
    }

}

export default PrincipalPage