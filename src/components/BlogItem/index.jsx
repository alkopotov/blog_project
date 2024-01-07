import { Link } from "react-router-dom"
import { formatter } from "../.."
import s from './BlogItem.module.css'

function BlogItem({blog, onMain}) {

  let dateArray = formatter.format(blog.date).replace(',','').split(' ')
  let dateDisplay = dateArray[1] + ' ' + dateArray[0] + ' ' + dateArray[2] 


  return (
    <div className={`${s.blog_item_wrapper} ${onMain ? s.main_page : ''}`}>
      <h3>{blog.title}</h3>
      <div className={s.date_tags}>
        <h4>{dateDisplay}</h4>
        <div className={s.blog_tags}>
          {blog.tags.map(elem => 
            blog.tags.indexOf(elem) === blog.tags.length - 1 ? <Link key={elem.id}>{elem.title}</Link> 
              :<Link key={elem.id}>{`${elem.title}${', '}`}</Link>
             
          )}

          {/* {blog.tags.map(elem => <h4 key={elem.id}>{elem.title}</h4> )} */}
        </div>
      </div>
      <p>{blog.text}</p>
    </div>
  )
}

export default BlogItem