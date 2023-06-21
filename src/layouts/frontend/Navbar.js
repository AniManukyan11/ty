import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/admin/assets/img/TEYNIG.png'
import './styles.css'

const Navbar = ({cartItemCount}) => {
    const auth = localStorage.getItem("token");
  
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/register')


  }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow stick-top " >
            <div className="container">
                <Link className="navbar-brand" to="#"><img src={logo} /> </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        auth ?
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                       
                        <li> <Link className="nav-link " onClick={logout} to="/register">Logout </Link></li> 
                        <li>
                        <svg width='24px' fill='white' xmlns="http://www.w3.org/2000/svg"  version="1.1" id= "Layer_1" x="0px" y="0px" viewBox="0 0 122.43 122.88" ><g><path  d="M22.63,12.6h93.3c6.1,0,5.77,2.47,5.24,8.77l-3.47,44.23c-0.59,7.05-0.09,5.34-7.56,6.41l-68.62,8.73 l3.63,10.53c29.77,0,44.16,0,73.91,0c1,3.74,2.36,9.83,3.36,14h-12.28l-1.18-4.26c-24.8,0-34.25,0-59.06,0 c-13.55-0.23-12.19,3.44-15.44-8.27L11.18,8.11H0V0h19.61C20.52,3.41,21.78,9.15,22.63,12.6L22.63,12.6z M63.49,23.76h17.76v18.02 h15.98L72.39,65.95L47.51,41.78h15.98V23.76L63.49,23.76z M53.69,103.92c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.24,9.48-9.48,9.48 c-5.24,0-9.48-4.24-9.48-9.48C44.21,108.17,48.45,103.92,53.69,103.92L53.69,103.92z M92.79,103.92c5.23,0,9.48,4.25,9.48,9.48 c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48C83.31,108.17,87.55,103.92,92.79,103.92L92.79,103.92z"/></g></svg>

                        <div className='number'>{cartItemCount}</div>
                        </li>
                        </ul> 
                       
                        :
                        <ul>
                        <li className="nav-item">
                            <Link className="nav-link " to='/login'>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to='/register'>Sing Up</Link>
                        </li>
                       

                    </ul>
}
                </div>
            </div>
        </nav>
    )
}

export default Navbar