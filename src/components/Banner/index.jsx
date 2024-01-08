import s from './Banner.module.css'
import { BASE_URL } from '../..'
import { forwardRef } from 'react'

const Banner = forwardRef((props, ref) => {

  return (
    <section className={s.banner_wrapper} ref={ref}>
      <div
        className={s.hero_picture}
        style={{backgroundImage: `url(${BASE_URL + '/images/person.webp'})`}}
      ></div>
      <div className={s.banner_info}>
        <h1>Hi, I'm Alex, Front-End Developer</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit id voluptatibus magni sunt ea excepturi dicta explicabo esse perspiciatis accusamus. Quos rem sed assumenda, tenetur cupiditate ratione amet eos saepe!</p>
        <a href={BASE_URL + '/files/resume.docx'}>
          <button>Download Resume</button>
        </a>
        
      </div>
      
    </section>
  )

})

export default Banner