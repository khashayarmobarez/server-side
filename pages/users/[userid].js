
export async function getStaticPaths() {

  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()
  const paths = data.map(user => ({
    params : { userid: user.id.toString(),   }
  }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`)
    const data = await res.json()

    console.log(params)

    return {
        props: {
            data
        }
    }
}

function UserDetails({ data }) { 

  console.log(data)

  return (
    <div>
      <h1>user details</h1>
      <h3>{data.name}</h3>
    </div>
  )
}

export default UserDetails
