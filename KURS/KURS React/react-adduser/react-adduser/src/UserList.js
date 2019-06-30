import React from "react";

const UserList = (props) =>{



    return (
        <ul>
            {props.users.map(currentUser => 
            // pozwoli iterowa po TABLICY i wstawi element html
                <li  key={currentUser.id} 
                onClick={() => props.removeUser(currentUser.id, currentUser.name)}>
                {/* tutaj podpinamy funkcje która wywoal () funke */}
                {currentUser.name}</li>)}
        </ul>
            )};

export default UserList;