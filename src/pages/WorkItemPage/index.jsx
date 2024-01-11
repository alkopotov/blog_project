import { Link, useNavigate, useParams } from 'react-router-dom'
import s from './WorkItemPage.module.css'
import { useWorkByIdQuery } from '../../asyncActions'
import { useRef } from 'react'
import { getUrl } from '../..'

function WorkItemPage() {

  const {id} = useParams()
  const navigate = useNavigate()
  const headerRef = useRef()

  
  const {isLoading, isError, isSuccess, data} = useWorkByIdQuery(id)

  if (isError) return <>Server Error</>
  if (isLoading) return <div onLoad={() => this.scrollIntoView({block: "end"})}>Loading...</div>

  if (isSuccess && data.work.status === 'ERR') return <>{navigate('/notfound')}</>
  let contents = isSuccess ? [...data?.work.contents].sort((a, b) => a.position - b.position) : [];
  
  
  return(
    <main className={s.workitempage_wrapper}>
      <section className={s.workitempage_description}>
        <p className={s.workitempage_header} ref={headerRef} onLoad={() => this.scrollIntoView({block: "end"})}>{data?.work.title}</p>
  
        <div className={s.workitempage_year_tags}>
          <div className={s.workitempage_year}>{data?.work.year}</div>
          <div className={s.workitempage_tags}>
            {data?.work.tags.map(elem => 
              data?.work.tags.indexOf(elem) === data?.work.tags.length - 1 ? <Link key={elem.id} to={'/works/tag/' + elem.title}>{elem.title}</Link>
              :<Link key={elem.id} to={'/works/tag/' + elem.title}>{`${elem.title}${', '}`}</Link>)}
          </div>          
        </div>

        <p>{data?.work.text}</p>
        <div className={s.work_main_picture} style={{backgroundImage: `url(${getUrl(data?.work.main_img)})`}}></div>
      </section>
      

      <section className={s.workitempage_contents}>
        {contents.map(elem => {
          switch(elem.type) {
            case('h1'):
              return <h1 key={elem.id}>{elem.contentValue}</h1>
            case('h2'):
              return <h2 key={elem.id}>{elem.contentValue}</h2>
            case('text'):
              return <p key={elem.id}>{elem.contentValue}</p>
            case('img'):
              return <div key={elem.id} className={s.workitem_picture} style={{backgroundImage: `url(${getUrl(elem.contentValue)})`}}></div>
            case('link'):
              return <a key={elem.id} href={elem.contentValue} target={'_blank'} rel={'noreferrer'}>View more</a>
            default:
              return <div key={elem.id}></div>
          }
        })}
      </section>
    </main>
  )
}

export default WorkItemPage