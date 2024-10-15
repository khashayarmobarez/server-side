import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <div>
       <h3>{data} server side notes</h3>
    </div>
  )
}

// testing get data at ssg rendering
export async function getStaticProps() {
// fetched data from api
  const data = 'khashayar mobarez'

  return {
    props: {
      data,
    }
  }  
}