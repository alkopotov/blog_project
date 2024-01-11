import { NavLink } from "react-router-dom";
import s from './Header.module.css'
import { ReactComponent as Hamburger } from './images/menu.svg';
import { useDispatch, useSelector } from "react-redux";
import { menuOffAction, menuToggleAction } from "../../store/menuSlice";

function Header() {

  const menuVisible = useSelector(store => store.menu.value)
  const dispatch = useDispatch()

  return(
    <header className={s.header_wrapper}>
      
      <nav 
        className={`${s.menu_list} ${menuVisible ? s.menu_visible : ''}`}
        onClick={()=> dispatch(menuOffAction())}
      >

        <NavLink
          to={'/'}
          className={({ isActive, isPending }) => 
            isPending ? `${s.menu_item}` : isActive ? `${s.menu_item} ${s.menu_item_active}`: `${s.menu_item}`
          }
        >
          Home
        </NavLink>


        <NavLink
          to={'/works'}
          className={({ isActive, isPending }) => 
            isPending ? `${s.menu_item}` : isActive ? `${s.menu_item} ${s.menu_item_active}`: `${s.menu_item}`
          }
        >
          Works
        </NavLink>


        <NavLink
          to={'/blogs'}
          className={({ isActive, isPending }) => 
          isPending ? `${s.menu_item}` : isActive ? `${s.menu_item} ${s.menu_item_active}`: `${s.menu_item}`
          }
        >
          Blog
        </NavLink>
        
        <NavLink
          to={'/contact'}
          className={({ isActive, isPending }) => 
          isPending ? `${s.menu_item}` : isActive ? `${s.menu_item} ${s.menu_item_active}`: `${s.menu_item}`
          }
        >
          Contact
        </NavLink>

      </nav>
      <Hamburger 
        className={s.hamburger}
        onClick={() => dispatch(menuToggleAction())}
      />
    </header>
  )
} 

export default Header;