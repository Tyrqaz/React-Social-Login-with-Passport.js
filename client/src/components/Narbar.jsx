import { Link } from "react-router-dom"

const Narbar = ({user}) => {
  return (
    <div className="navbar">
      <span className="logo"><Link className="link" to="/">Lama App</Link></span>{
        user ? (

            <ul className="list">
        <li className="listItem">
            <img src="https://images.pexels.com/photos/21733725/pexels-photo-21733725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="avatar" />
        </li>
        <li className="listItem">
            John Doe
        </li>
        <li className="listItem">
            Logout
        </li>
      </ul>
    ) : (<Link className="link" to="login">Login</Link>)
  }
    </div>
  )
}

export default Narbar