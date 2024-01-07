import { useEffect } from 'react';
import Banner from '../../components/Banner';
import s from './HomePage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecentBlogs } from '../../asyncActions/blogs';
import { Link } from 'react-router-dom';
import BlogItem from '../../components/BlogItem';
import WorkList from '../../components/WorkList';
import { fetchFeaturedWorks } from '../../asyncActions/works';

function HomePage() {

  const blogs = useSelector(store => store.blogs)
  const works = useSelector(store => store.works)

  const dispatch = useDispatch()


  useEffect(()=> {
    dispatch(fetchRecentBlogs())
    dispatch(fetchFeaturedWorks())
  }, [dispatch])

  console.log(works);
  return (
    <main className={s.wrapper}>
      <Banner/>
      <section className={s.recent_posts_wrapper}>
        <div className={s.recent_posts}>
          <div className={s.recent_posts_header}>
            <h2>Recent posts</h2>
            <Link to={'/blog'}>View All</Link>
          </div>
          <div className={s.recent_posts_list}>
            {blogs.map(elem => <BlogItem  key={elem.id} blog={elem} onMain={true}/>)}
          </div>
        </div>
      </section>
      <WorkList withTitle={true}/>
    </main>
  )
}

export default HomePage;