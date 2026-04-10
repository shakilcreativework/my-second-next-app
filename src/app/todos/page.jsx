
const TodosPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    // console.log(data);
    return (
        <div>
            <h2>todos: {data.length}</h2>
        </div>
    );
};

export default TodosPage;