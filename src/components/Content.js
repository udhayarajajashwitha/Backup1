import React from 'react'
import './style.css'

export class Content extends React.Component{
    render(){
        return(
            <div className="content">
                <h3>Content Heading</h3>
                <p>The 2019 Pantone Color of the Year was Living Coral. It’s a lively, nourishing color that has a youthful flavor to it. When combined with the refreshing blue of the Pacific Coast, it evokes images of the ocean floor and a vibrant seabed filled with coral. </p>
            </div>
        )
    }
}

export default Content;