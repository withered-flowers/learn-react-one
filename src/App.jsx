import PostsTable from "./components/PostsTable.jsx";

function App() {
  return (
    <div className="App p-4 min-h-screen min-w-full bg-gray-200 flex flex-col gap-4">
      <h1 className="text-3xl mx-auto">List of Posts</h1>
      <PostsTable />
    </div>
  );
}

export default App;
