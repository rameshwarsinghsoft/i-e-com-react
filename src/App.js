
import {
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  Navigate,
  useLocation,
  useMatch,
  HashRouter,
  MemoryRouter,
  useRoutes,
  createBrowserRouter,
  createHashRouter,
  createMemoryRouter,
  RouterProvider
} from "react-router-dom";
import Protected from "./Protected";
import Logout from "./Logout";

const Login = () => {
  function isLogin() {
    localStorage.setItem("login", true);
    console.log("object")
  }
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={isLogin}>Login</button>
    </>
  )
}


const Home = () => {
  return (
    <h1>This is Home Page</h1>
  )
}

const About = () => {
  const location = useLocation()
  console.log("location : ", location.pathname)
  const param = useParams();
  console.log("param : ", param)
  return (
    <>
      {/* <h1>Name is {param.userName}</h1> */}
      <h1>This is About Page</h1>
    </>
  )
}

const User = () => {
  return (
    <div>
      <h1>This is User Page</h1>

      {/* Nested Routes render yaha honge */}
      <Outlet />
    </div>
  )
}

const UserDetail = () => {
  return (
    <h1>This is UserDetail Page</h1>
  )
}

const UserWork = () => {
  return (
    <h1>This is UserWork Page</h1>
  )
}

function App() {
  return (
    <div>
      {/* <Protected /> */}
      <header>
        <ul>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/user">User</NavLink></li>
          <li><NavLink to="/user/detail">User Detail</NavLink></li>
          <li><NavLink to="/user/work">User Work</NavLink></li>
          <li><NavLink to="/logout">Logout</NavLink></li>
        </ul>
      </header>

      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/about/:userName" element={<About />} />

          {/* Nested Routes */}
          <Route path="/user" element={<Protected Component={User} />}>
            <Route path="detail" element={<UserDetail />} />
            <Route path="work" element={<UserWork />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App
