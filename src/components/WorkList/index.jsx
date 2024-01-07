import { useSelector } from 'react-redux'
import s from './WorkList.module.css'
import WorkItem from '../WorkItem'

function WorkList({withTitle}) {
  

  const workList = useSelector(store => store.works)

  return (
    <section className={s.worklist_wrapper}>
      {withTitle && <h2>Featured works</h2>}
      {workList.map(elem => <WorkItem key={elem.id} work={elem}/>)}
    </section>
  )
  
}

export default WorkList