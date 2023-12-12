// make an api call using useEffect
import { useState, useEffect } from "react";
interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export const APICall = () => {
  // Your code here!
  const [toDo, setToDo] = useState<ToDo | null>(null);

  useEffect(() => {
    const getToDo = async () => {
      try {
        const data = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );

        if (data) {
          const result: ToDo = await data.json();
          setToDo(result);
        } else {
          console.log("No TodDO list entries were returned");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getToDo();
  }, []);

  return (
    <>
      <h2>useEffect</h2>

      {toDo !== null && (
        <>
          <p>UserId: {toDo.userId} </p>
          <p>Id: {toDo.id} </p>
          <p>Id: {toDo.title} </p>
          <p>Completed: {toDo.completed ? "true" : "false"}</p>
        </>
      )}
    </>
  );
};
