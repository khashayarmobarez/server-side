import { useRouter } from 'next/router'

export async function getStaticPaths() {

  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()
  const usersData = data.slice(0,4)

  const paths = usersData.map(user => ({
    params : { userid: user.id.toString(),   }
  }))

    return {
        paths,
        // fallback: false,
        // fallback: true,
        fallback: 'blocking', 
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`)
    const data = await res.json()

    console.log(params)

    // handling requests more than the availabe jsons 
    if(!data.name) {
      return {
        notFound: true,
        // you can also redirect the user with below method
        // redirect: { destination: '/' }
      }
    }

    return {
        props: {
            data
        }
    }
}

function UserDetails({ data }) { 

  // const router = useRouter()

  console.log(data)

  // fallback
  // if (router.isFallback) {
  //   return <h2>Fall back page!</h2>
  // }

  return (
    <div>
      <h1>user details</h1>
      <h3>{data.name}</h3>
    </div>
  )
}

export default UserDetails
