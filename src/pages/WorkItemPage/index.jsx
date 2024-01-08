import { useParams } from 'react-router-dom'
import s from './WorkItemPage.module.css'
import { useWorkByIdQuery } from '../../asyncActions'

function WorkItemPage() {

  const {id} = useParams()

  
  const {isLoading, isError, isSuccess, data} = useWorkByIdQuery(id)

  if (isError) return <>Server Error</>
  if (isLoading) return <>Loading...</>

  let contents = isSuccess ? [...data.work.contents].sort((a, b) => a.position - b.position) : [];
  
  console.log(contents)


  return(
    <main className={s.workitempage_wrapper}>
      <h1>{data?.work.title}</h1>
      {contents.map(elem => {
        switch(elem.type) {
          case('h1'):
            return <h1 key={elem.id}>{elem.contentValue}</h1>
          case('h2'):
            return <h2 key={elem.id}>{elem.contentValue}</h2>
          case('text'):
            return <p key={elem.id}>{elem.contentValue}</p>
          case('img'):
            return <div key={elem.id} className={s.workitem_picture} style={{backgroundImage: `url(${elem.contentValue})`}}></div>
          case('link'):
            return <a key={elem.id} href={elem.contentValue} target={'_blank'} rel={'noreferrer'}>View more</a>
          default:
            return <div key={elem.id}></div>
        }
      })}
      
    </main>
  )
}

export default WorkItemPage