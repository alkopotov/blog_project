import s from './WorkList.module.css'
import WorkItem from '../WorkItem'
import { useAllWorkListQuery } from '../../asyncActions'

function WorkList({withTitle, tag}) {
  
  const {isLoading, isError, isSuccess, data} = useAllWorkListQuery()

  let workList = []
  if (isError) return <>ServerError</>
  if (isLoading) return <>Loading...</>
  
  if (isSuccess) {
    if (tag) {
      workList = data.works.filter(elem => {
        return elem.tags.filter(tagItem => tagItem.title === tag).length > 0
      })
    } else {
      workList = data.works
    }
}

  return (
    <section className={s.worklist_wrapper}>
      {withTitle && <h2>Featured works</h2>}
      {withTitle ? workList.slice(0, 3).map(elem => <WorkItem key={elem.id} work={elem}/>): workList.map(elem => <WorkItem key={elem.id} work={elem}/>)}
    </section>
  )
  
}

export default WorkList