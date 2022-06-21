import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ListIcon from '@mui/icons-material/List';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
         
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"/>
          </div>
          <div className="item">
            <DarkModeIcon className="icon"/>
          </div>
          <div className="item">
            <ListIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar