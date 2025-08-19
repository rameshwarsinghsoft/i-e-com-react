import GrandChild from './GrandChild';
function Child() {
    return (
        <div style={{ backgroundColor: "blue", margin: "20px" }}>
            <h1>Child Component</h1>
            <GrandChild />
        </div>
    )
}

export default Child;
