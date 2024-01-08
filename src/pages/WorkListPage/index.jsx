import { useEffect, useRef } from "react";
import WorkList from "../../components/WorkList";
import s from './WorkListPage.module.css'
import { Link, useParams } from "react-router-dom";
function WorkListPage() {

  const headerRef = useRef()

  const {tag} = useParams()

  useEffect(() => {
    headerRef.current.scrollIntoView({block: "end"})
  }, [])


  return (
    <main className={s.worklistpage_wrapper}>
      <div className={s.worklist_header}>
        <h1 ref={headerRef}>Works</h1>
        {tag && <Link to={'/works/'}>All Works</Link>}
      </div>
      {tag ? <WorkList tag={tag}/> :<WorkList/>}
    </main>
   
  )
}

export default WorkListPage