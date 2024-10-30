import { useEffect, useState } from 'react'

import useSWR from 'swr'

const index = () => {

    // const [toDos, setToDos] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3060/todos').then(res => res.json())
    //     .then((data) => setToDos(data))
    // })

    const {data, error} = useSWR('http://localhost:3060/todos',
        (url) => fetch(url).then((res) => res.json()) 
    )

    console.log(data,error)

    return (
        <div>
            {
                data ?
                    data.map((todo) => <h3 key={todo.id}>{todo.title}</h3>)
                    :
                    <p>loading</p>
            }
        </div>
    );
};

export default index;