import { useState } from "react";


const toDoId = ({toDo}) => {

    const [data, setData] = useState(toDo);

    const updateHandler = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`); 
        const Data = await res.json();
        setData(Data);
    }

    return (
        <div>
            <h1>{data.title}</h1>
            <h1>{`${data.completed}`}</h1>
            <button onClick={() => updateHandler(data.id)}>update</button>
        </div>
    );
};

export default toDoId;

export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.toDoId}`); 
    const data = await res.json();

    return {
        props: { toDo: data }
    }
}