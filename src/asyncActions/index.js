import { createApi } from '@reduxjs/toolkit/query/react'


export const BASE_URL = 'http://localhost:4444/'

export const API = createApi({
  reducerPath: 'API',
  endpoints: (builder) => ({

    recentBlogList: builder.query({
      queryFn: async() => {
        try {
          const blogs = await fetch(BASE_URL + 'blogs/');
          const blogsData = await blogs.json()
          let recentPosts = blogsData.map(elem =>  {
            elem.date = Date.parse(elem.date)
            return elem
          })
          recentPosts.sort((a, b) => b.date - a.date)
          return {data: {
            blogs: recentPosts.slice(0,2)
            }}
        } catch (e) {
          return {error: e.message}
        }
      }
    }),

    allBlogList: builder.query({
      queryFn: async() => {
        try {
          const response = await fetch(BASE_URL + 'blogs/');
          const data = await response.json()
          let allPosts = data.map(elem => {
            elem.date = Date.parse(elem.date)
            return elem
          })
          return{data: {blogs: allPosts.sort((a, b) => b.date - a.date)}}
        } catch (e) {
          return {error: e.message}
        }
      }
    }),

    allWorkList: builder.query({
      queryFn: async() => {
        try {
          const response = await fetch(BASE_URL + 'works/all')
          const allWorks = await response.json()
          return {data : {works: allWorks}}
        } catch(e) {
          return {error: e.message}
        }
      }
    }),

    workById: builder.query({
      queryFn: async(id) => {
        try {
          const response = await fetch(BASE_URL + 'works/' + id)
          const workItem = await response.json()
          return{data: {work: workItem}}
        } catch(e) {
          return {error: e.message}
        }
      }
    })

  })
})

export const {
              useRecentBlogListQuery,
              useAllBlogListQuery,
              useAllWorkListQuery,
              useWorkByIdQuery }
        = API;