import React from 'react';
import '../App.css';

import Followers from './Followers.js'

const GitHubCard = (props) => {

    return(
        <div className='github_card'>
            <p>{props.data.github.login}</p>
            <img src={props.data.github.avatar_url}
                 alt={props.data.github.name}
                />
            <p>Name: {props.data.github.name}</p>
            <p>Bio: {props.data.github.bio}</p>
            <p>Lives in: {props.data.github.location}</p>
            <p>User: {props.data.github.twitter_username}</p>
            <p>Followers: {props.data.github.followers}</p>

            <Followers followers={props} />
        </div>
    )
}


export default GitHubCard;