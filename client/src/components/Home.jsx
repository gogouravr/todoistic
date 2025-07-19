import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [todoList, setTodoList] = useState([]);

    const getTodoList = async () => {
        try {
            const response = await axios.get("/api/list");
            setTodoList(response.data);
        } catch (error) {
            console.error("Failed to fetch todo list:", error);
        }
    };

    useEffect(() => {
        getTodoList();
    }, []);

    return (
        <>
            <h1>Home Page</h1>
            {todoList.map((item, index) => (
                <p >{item.title}</p>
            ))}
        </>
    );
};

export default Home;