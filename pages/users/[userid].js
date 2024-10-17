
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

function UserDetails() {
  return (
    <div>
      user details
    </div>
  )
}

export default UserDetails
