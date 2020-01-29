import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../unilities/axiosWithAuth'

import FriendsForm from './FriendForm'

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [editMyFriend, setEditMyFriend] = useState({});

    useEffect(() => {
        // get friends list
        axiosWithAuth().get('/friends')
            .then(res => setFriends(res.data))
            .catch(err => err.response)
    }, [])

    const killFriend = e => {
        setFriends(friends.filter(friend => friend.id !== e))
    }

    const editFriend = id => {
        setEditMyFriend(friends.find(friend => friend.id === id))
    }

    return (
        <>
            <FriendsForm updateFriends={setFriends} editFriend={editMyFriend} />
            <div />
            <div>
                {
                    friends.map(friend => (
                        <div key={friend.id} width={4}>
                            <div>
                                <div>
                                    <div onClick={() => editFriend(friend.id)}>{friend.name}</div>
                                    <div>{friend.email}</div>
                                </div>
                                <div>
                                    <div name="trash" onClick={() => killFriend(friend.id)} />
                                    Age: {friend.age}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default FriendsList;