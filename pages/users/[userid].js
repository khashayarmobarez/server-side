
export asyn function getStaticPaths() {

    return {
        paths : [
            { params: { userId: '1' } },
            { params: { userId: '2' } },
            { params: { userId: '3' } },
            { params: { userId: '4' } },
            { params: { userId: '5' } },
            { params: { userId: '6' } },
        ]
        ,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()

    console.log(params)

    return {
        props: {
            data
        }
    }
}

function UserDetails({ data }) { 
  return (
    <div>
      <h1>user details</h1>
      <h3>{data.name}</h3>
    </div>
  )
}

export default UserDetails
