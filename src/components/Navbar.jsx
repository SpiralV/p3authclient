import { Link } from 'react-router-dom'

export default function Navbar (props) {
    const loggedIn = (
        <>
        <Link to='/profile'>profile</Link>
        <Link to='/'><span onClick={props.handleLogout}>Logout</span></Link>
        </>
    )

    const loggedOut = (
        <>
        <Link to="/login">Login!</Link>
        <Link to="/register">
            new account!
        </Link>
        </>
    )
    return (
        <nav>
            <Link to="/">
                Home
            </Link>
            
            {props.currentUser ? loggedIn : loggedOut}
            {/* {renderedNav} */}
        </nav>
    )
}