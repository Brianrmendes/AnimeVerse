import React from 'react';
import "./ProfileScreen.css";
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';

function ProfileScreen() {
    const user = useSelector(selectUser)
    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img 
                    src="https://cdn.discordapp.com/attachments/852893329317822538/867417083603845130/65-653894_dodo-clipart-rest-sleep-pokemon-pikachu.png" 
                    alt="" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>I'll take a potato chip... AND EAT IT!</h3>
                            
                            

                            <button onClick={() => auth.signOut()} 
                            className="profileScreen__signOut">
                                Sign Out
                            </button>
                            { <h4 className = "profileScreen__mentions">Made By:- Austin, Brian, Alen, Hansel</h4> }
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen
