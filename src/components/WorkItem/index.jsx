import { Link } from 'react-router-dom'
import s from './WorkItem.module.css'
import { getUrl } from '../..'

function WorkItem({work}) {
  return (
    <div className={s.workitem_wrapper}>
      <div className={s.workitem_picture} style={{backgroundImage: `url(${getUrl(work.main_img)})`}}></div>
      <div className={s.workitem_details}>
        <Link to={'/works/' + work.id}>
          <h3>{work.title}</h3>
        </Link>
        
        <div className={s.workitem_year_tags}>
          <div className={s.workitem_year}>{work.year}</div>
          <div className={s.workitem_tags}>
            {work.tags.map(elem => 
              work.tags.indexOf(elem) === work.tags.length - 1 ? <Link key={elem.id} to={'/works/tag/' + elem.title}>{elem.title}</Link>
              :<Link key={elem.id} to={'/works/tag/' + elem.title}>{`${elem.title}${', '}`}</Link>)}
          </div>          
        </div>
        
        <p className={s.work_description}>{work.text}</p>
      </div>
      
    </div>
  )
}

export default WorkItem