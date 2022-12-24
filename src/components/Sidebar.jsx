import '../styles/Sidebar.scss'

const Sidebar = (props) => {
    return (
        <>
            <ul className="sidebar">
                {props.genresArray.map((item) => <li key={item.i}> {item.genre} </li>)}
            </ul>
        </>
    );
}

export default Sidebar