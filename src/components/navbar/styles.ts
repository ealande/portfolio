import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: rgba(80, 200, 120, 0.5); /* Custom background color */
  position: fixed;
  z-index: 1000;
  width: 100%;
  backdrop-filter: blur(8px);
  font-family: 'Roboto';
  .navbar-brand{
    font-size: 2rem;
    color: #ececec; 
  },
  .navbar-toggler-icon{
    color:#ffffff;
  },
  .nav-link {
    color: #E0FFF5; /* Custom text color */
    box-shadow: 2px;
    font-size: 1.5rem; 
    margin-right: 1.5rem;
    padding: 8px;
    border-radius:12px; 
      &:hover {
      color: #98FF98; /* Custom hover color */
      transition-duration: 700ms;

    }
  }

  .navbar-toggler {
    border-color: #ffffff; /* Custom border color for the toggle button */
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }
  .navbar-nav {
    display: flex;
    justify-content: center;
    width: 100%; 
  }

  .nav-item {
    display: flex;
    align-items: center;
  }
`
