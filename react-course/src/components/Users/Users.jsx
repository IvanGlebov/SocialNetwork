import s from './Users.module.css'
import User from "./User/User";
import * as axios from "axios";

const Users = (data) => {

    let getUsersFromServer = () => {
        if (data.displayedUsers.length === 0) {
            axios
                .get("http://localhost:3001/users")
                .then(response => {
                    console.log(response.data.allUsers)
                    data.setUsers(response.data.allUsers)
                })

        }
    }

    let usersElements = data.displayedUsers.map(user =>
            <User id={user.id}
                  follow={data.follow}
                  unfollow={data.unfollow}
                  key={user.id}
                  profileImageSrc={user.profileImageSrc}
                  name={user.name}
                  status={user.status}
                  location={user.location}
                  followed={user.followed}/>
    )
    return (
        <div>
            <button onClick={getUsersFromServer}>Get Users</button>
            {usersElements}
        </div>
    )
}

export default Users