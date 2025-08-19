import GrandChild from './GrandChild';
function Child(props) {
    return (
        <div style={{ backgroundColor: "blue", margin: "20px" }}>
            <h1>Child Component</h1>
            <GrandChild name={props.name} />
        </div>
    )
}

export default Child;
