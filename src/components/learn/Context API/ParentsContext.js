import Child from './Child'
import { userContext } from './UserContext';
function ParentsContext() {

    const users = [
        {
            firstName: "Rameshwar",
            lastName: "Yadav",
            email: "ram@gmail.com",
            age: 30
        },
        {
            firstName: "Priya",
            lastName: "Sharma",
            email: "priya.sharma@example.com",
            age: 25
        },
        {
            firstName: "Amit",
            lastName: "Verma",
            email: "amit.verma@example.com",
            age: 28
        },
        {
            firstName: "Neha",
            lastName: "Singh",
            email: "neha.singh@example.com",
            age: 32
        },
        {
            firstName: "Vikas",
            lastName: "Patel",
            email: "vikas.patel@example.com",
            age: 27
        }
    ];

    return (
        <userContext.Provider value={users}>
            <div style={{ backgroundColor: "red" }}>
                <h1>Parents Component</h1>
                <Child />
            </div>
        </userContext.Provider>
    )
}

export default ParentsContext;
