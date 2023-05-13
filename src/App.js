import './App.css';
import { useFetchData } from './hooks/useFetchData';
const url = "https://jsonplaceholder.typicode.com/users"

function App() {
  const { response, isLoading } = useFetchData(url)
  return (
    <div>
      <h1>{isLoading ? "Loading..." : "Users"}</h1>
      {response.map((data) => {
        return (
          <>
            <h3 key={data.id}>{data.name}</h3>
          </>
        )
      })}
    </div>
  );
}

export default App;
