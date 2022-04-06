import { useEffect, useState, useCallback } from "react";

function PostsTable() {
  const [posts, setPosts] = useState([]);

  // Async call should be encapsulated with useCallback
  const fetchPosts = useCallback(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const data = await response.json();
    setPosts(data);
  }, [])

  useEffect(() => {
    // componentDidMount
    fetchPosts();

    return () => {
      // componentWillUnmount
    };
  }, [fetchPosts]);

  return (
    <table>
      <thead>
        <tr>
          <th className="border border-slate-600">Id</th>
          <th className="border border-slate-600">UserId</th>
          <th className="border border-slate-600">Title</th>
          <th className="border border-slate-600">Body</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className="border border-slate-600">{post.id}</td>
            <td className="border border-slate-600">{post.userId}</td>
            <td className="border border-slate-600">{post.title}</td>
            <td className="border border-slate-600">{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PostsTable;
