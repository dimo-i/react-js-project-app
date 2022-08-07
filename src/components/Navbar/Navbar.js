

export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">

        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul class="navbar-nav mr-auto">
  
            <li class="nav-item">
              <a class="nav-link" href="">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="">Dashboard</a>
            </li>
          </ul>
        </div>

        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="">Create Category</a> 
            </li>


            <li class="nav-item">
              <a class="nav-link" href="">New Project</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <strong>Current User Name</strong>
              </a>
              <div class="dropdown-menu dropdown-menu-end">

                <a class="dropdown-item" href="">Show all registered users</a>

                <a class="dropdown-item" href="">My
                  Projects</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="">Profile
                  Details</a>
                <a class="dropdown-item" href="">Change Password</a>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="">Logout</a>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Register</a>
            </li>

          </ul>
        </div>

      </nav>
      </>
  );
}