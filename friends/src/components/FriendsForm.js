import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../unilities/axiosWithAuth';



const FriendForm = (props) => {

    const [formValues, setFormValues] = useState({
        id: null,
        name: '',
        age: '',
        email: ''
    });

    const [addingFriend, setAddingFriend] = useState(false)
    const [buttonLabel, setButtonLabel] = useState('Add Friend');

    useEffect(() => {
        console.log('git test')
        setFormValues({
            id: props.editFriend.id,
            name: props.editFriend.name,
            age: props.editFriend.age,
            email: props.editFriend.email
        })
        if(props.editFriend.id){
            setButtonLabel('Update Friend')
        }
    }, [props])

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setAddingFriend(!addingFriend);
        if(formValues.id){
            // update Friend
            axiosWithAuth().put(`/friends/${formValues.id}`, formValues)
                .then(res => {
                    props.updateFriends(res.data)
                    setAddingFriend(!addingFriend);
                    setFormValues({id: null, name: '', age: '', email: ''})
                    setButtonLabel('Add Friend');
                })
                .catch(err => console.log(err.response))
        }else{
            // add friend
            axiosWithAuth().post('/friends', {...formValues, id: Math.random()})
            .then(res => {
                props.updateFriends(res.data);
                setAddingFriend(!addingFriend);
                setFormValues({id: null, name: '', age: '', email: ''})
            })
            .catch(err => err.response)
        }
    }

    return (
        <div onSubmit={handleSubmit}>
            {addingFriend && <div>Adding your new friend</div>}
            <div widths='equal'>
                <input  type="text" name="name" placeholder="Friends Name" value={formValues.name} onChange={handleChange} />
                <input  type="text" name="age" placeholder="Friends Age" value={formValues.age} onChange={handleChange} />
                <input  type="email" name="email" placeholder="Friends Email" value={formValues.email} onChange={handleChange} />
                <input type="hidden" name="id" value={formValues.id} />
            </div>
            <button type="submit">{buttonLabel}</button>
        </div>
    )
}

export default FriendForm;