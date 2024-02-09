import {Link} from "react-router-dom";

const Header = () =>{
    

    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">LOGO</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">Sprintbacklog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Backlog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Taskboard</Link>
              </li>
            </ul>

            <div className="row">
                  
                    <div className="col">
                        <Link to="/auth/register">
                        <button className="btn btn-outline-secondary me-2"
                                type="button">Sign up</button>
                        </Link>
                        <Link to="/auth/login">
                    <button className="btn btn-secondary"
                            type="button">Login</button>
                    </Link>
                    </div>

                    <div className="col-12">
                    <Link to="/msg" hidden>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.klipartz.com%2Fen%2Fsticker-png-bpegc&psig=AOvVaw3N0SvpPuJF6NPgy8KpGx2o&ust=1707602391362000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMDDx-Ggn4QDFQAAAAAdAAAAABAK"
                alt="msg icon" className="img-fluid shadow round"/>
                </Link>
                    </div>
                    <div className="col-12">
                    <Link to="/profile" hidden>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.klipartz.com%2Fen%2Fsticker-png-bpegc&psig=AOvVaw3N0SvpPuJF6NPgy8KpGx2o&ust=1707602391362000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMDDx-Ggn4QDFQAAAAAdAAAAABAK"
                alt="profile icon"/> 
                    </Link>
                    </div>
              </div>

          </div>
        </div>
      </nav> 
      
    )
}

export default Header;