import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

// the data prop is gotten from the getStaticProps 
export default function Home({data}) {

  // the data is fetched in server side but here we can log it in client side(use it)
  // console.log(data)

  return (
    <div>
       <h3>khashayar server side notes</h3>
       {
          data &&
          data.map(post => 
            <li key={post.id}>{post.title}</li>
          )
       }
    </div>
  )
}

// testing get data at ssg rendering
export async function getStaticProps() {
  // fetched data from api
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  // this log shows on terminal because it happens in server
  // console.log(data)

  return {
    props: {
      data
    }
  }  
}