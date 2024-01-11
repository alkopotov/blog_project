import { useEffect, useRef } from "react";
import BlogItem from "../../components/BlogItem";
import s from './BlogPage.module.css'
import { useAllBlogListQuery } from "../../asyncActions";
import { Link, useParams } from "react-router-dom";

function BlogPage() {

  const headerRef = useRef()

  const {tag} = useParams()

  const {isLoading, isError, isSuccess, data} = useAllBlogListQuery();

  let blogList = []

  if (isSuccess) {
    if (tag) {
      blogList = data.blogs.filter(elem => {
        return elem.tags.filter(tagItem => tagItem.title === tag).length > 0
      })
    } else {
      blogList = data.blogs
    }
}

  useEffect(() => {
    headerRef.current.scrollIntoView({block: "end"})
  }, [])


  return (
  
    <main className={s.blog_page_wrapper}>
      <div className={s.blog_page_header}>
        <h1 ref={headerRef}>Blog</h1>
        {tag && <Link to={'/blogs'}>View All</Link>}
      </div>
      
      <section className={s.blog_list}>
      {isError ? <>Server Error</> : isLoading ?  <>Loading...</> : isSuccess ?
          blogList.map(elem => <BlogItem key={elem.id} blog={elem}/>) : null}
      </section>
    </main>
  )
}

export default BlogPage;