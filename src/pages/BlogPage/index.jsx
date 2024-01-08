import { useEffect, useRef } from "react";
import BlogItem from "../../components/BlogItem";
import s from './BlogPage.module.css'
import { useAllBlogListQuery } from "../../asyncActions";

function BlogPage() {

  const headerRef = useRef()

  const {isLoading, isError, isSuccess, data} = useAllBlogListQuery();

  useEffect(() => {
    headerRef.current.scrollIntoView({block: "end"})
  }, [])


  return (
    <main className={s.blog_page_wrapper}>
      <h1 ref={headerRef}>Blog</h1>
      <section className={s.blog_list}>
      {isError ? <>Server Error</> : isLoading ?  <>Loading...</> : isSuccess ?
          data?.blogs.map(elem => <BlogItem key={elem.id} blog={elem}/>) : null}
      </section>
    </main>
  )
}

export default BlogPage;