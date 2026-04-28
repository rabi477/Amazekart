
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';


function App() {



  return (
    <>
      <section>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/routing">Routing</Link>
        <Link to="/parent">Parent</Link>
      </section>
      <Outlet/>
    </>
  )
}

export default App
