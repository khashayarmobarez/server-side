import Link from 'next/link'

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data)

    return {
        props: {
            users: data
        }
    }
}

function Users({users}) {
  return (
    <div>
      <ul>
        {
            users.map((user) => <li><Link href={`/users/${user.id}`}>{user.name}</Link></li>)
        }
      </ul>
    </div>
  )
}

export default Users;