import { useEffect, useRef } from 'react';
import Banner from '../../components/Banner';
import s from './HomePage.module.css'
import { Link } from 'react-router-dom';
import BlogItem from '../../components/BlogItem';
import WorkList from '../../components/WorkList';
import { useRecentBlogListQuery } from '../../asyncActions';

function HomePage() {

  const headerRef = useRef()

  const {isLoading, isError, isSuccess, data} = useRecentBlogListQuery();

  useEffect(() => {
    headerRef.current.scrollIntoView({block: "end"})
  }, [])

  return (
    <main className={s.wrapper}>
      <Banner ref={headerRef}/>
      <section className={s.recent_posts_wrapper}>
        <div className={s.recent_posts}>
          <div className={s.recent_posts_header}>
            <h2>Recent posts</h2>
            <Link to={'/blogs'}>View All</Link>
          </div>
          <div className={s.recent_posts_list}>

            {isError ? <>Server Error</> : isLoading ?  <>Loading...</> : isSuccess ?
            data?.blogs.map(elem => <BlogItem key={elem.id} blog={elem} onMain={true}/>) : null}
            
            
          </div>
        </div>
      </section>
      <WorkList withTitle={true}/>
    </main>
  )
}

export default HomePage;