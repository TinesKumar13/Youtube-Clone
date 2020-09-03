import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                    <TuneOutlinedIcon/>
                    <h2>FILTER</h2>
            </div>


            <ChannelRow
            image
            channel
            verified
            subs
            noOfVideos
            description
            />
            <hr/>

            <VideoRow/>
        </div>

        
    )
}

export default SearchPage
