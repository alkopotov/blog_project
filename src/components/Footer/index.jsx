import { Link } from 'react-router-dom';
import s from './Footer.module.css'
import { ReactComponent as Vk } from './images/vk.svg';
import { ReactComponent as Git } from './images/git.svg';
import { ReactComponent as Telega } from './images/tg.svg';
import { ReactComponent as Whatsapp } from './images/what.svg';

function Footer() {
  return (
    <footer className={s.footer_wrapper}>
      <div className={s.footer_icons}>

        <Link to={'https://vk.com/id10682976'} target='_blank'>
          <Vk className={s.footer_icon_item}/>
        </Link>
        <Link to={'https://github.com/alkopotov'} target='_blank'>
          <Git className={s.footer_icon_item}/>
        </Link>
        <Link to={'https://t.me/alex_77_su'} target='_blank'>
          <Telega className={s.footer_icon_item}/>
        </Link>
        <Link to={'https://api.whatsapp.com/send?phone=79250388008'} target='_blank'>
          <Whatsapp className={s.footer_icon_item}/>
        </Link>


        
     </div>
      <p>Copyright ©2023 All rights reserved </p>
    </footer>
  )
}

export default Footer;