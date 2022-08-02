import React, { useEffect, useState } from "react";

const Todo = (props) => {


    console.log("props", props);

    return (
        <div>
            <ul>
                {props.data?.map((item) => {
                    return (
                        <li key={item.title}>{item.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todo;

export async function getServerSideProps(context) {
    console.log("context", context)
    let data = [];
    const result = await fetch('https://jsonplaceholder.typicode.com/todos');
    data =await result.json();
    return {
        props: {
            data
        }
    }
}