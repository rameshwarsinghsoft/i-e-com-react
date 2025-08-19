import { useContext } from "react"
import { userContext } from "./UserContext"

function GrandChild() {
    const users = useContext(userContext);
    console.log(users)
    // const { firstName, lastName, email } = users;

    return (
        <div style={{ backgroundColor: "yellow", margin: "20px" }}>

            <h>GrandChild Component</h>
            {users.map((user, index) => (
                <div key={index} >
                    <p>{user.firstName}</p>
                    <p>{user.lastName}</p>
                    <p>{user.email}</p>
                </div>
            ))
            }
        </div>
    )
}

export default GrandChild;
