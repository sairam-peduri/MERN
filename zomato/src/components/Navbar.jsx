import React from 'react'

const Navbar = () => {
  return (
    <div style={{margin:0,padding:0,width: "100vw"}}>
    <nav className="navbar navbar-expand-lg w-100" id="bar">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">
    <img src="../assets/icon.png" alt="Bootstrap" width="30" height="24" /> 
    <span className="title1"style={{ color: 'white' }}> Dine_in
    </span>
  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="../pages/Home" style={{ color: 'white' }}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="../pages/Login" style={{ color: 'white' }}>Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Register</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" style={{ color: 'white' ,border:'1px solid white' }}>Search</button>
      </form>
  </div>
  </div>
</nav>
</div>
  )
}

export default Navbar
