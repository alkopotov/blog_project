import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogs } from "../../asyncActions/blogs";
import BlogItem from "../../components/BlogItem";
import s from './BlogPage.module.css'

function BlogPage() {

  const headerRef = useRef()

  const dispatch = useDispatch()
  const blogs = useSelector(store => store.blogs)

  useEffect(() => {
    dispatch(fetchAllBlogs())
    headerRef.current.scrollIntoView({block: "end"})
  }, [])


  return (
    <main className={s.blog_page_wrapper}>
      <h1 ref={headerRef}>Blog</h1>
      <section className={s.blog_list}>
        {blogs.map(elem => <div key={elem.id} className={s.blog_item}><BlogItem blog={elem}/></div>)}
      </section>
    </main>
  )
}

export default BlogPage;