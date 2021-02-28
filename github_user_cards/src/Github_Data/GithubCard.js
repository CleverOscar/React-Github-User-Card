import React from 'react';
import '../App.css';

const GitHubCard = (props) => {

    console.log(props.data)

    return(
        <div className='github_card'>
            <p>{props.data.login}</p>
            <img src={props.data.avatar_url} atl="profile picture" />
            <p>Name: {props.data.name}</p>
            <p>Lives in: {props.data.location}</p>
            <p>{props.data.twitter_username}</p>
        </div>
    )
}


export default GitHubCard;