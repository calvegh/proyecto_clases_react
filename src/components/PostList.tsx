import { configuracion } from "../config/appConfiguration";
import { useFetch } from "../hooks/useFetch";
import { IPost } from "../page/PostPage";

export const PostList = () => {
  const {
    data: posts,
    loading,
    error,
  } = useFetch<IPost[]>(configuracion.urlJsonServerPost);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error en la consulta de dato: {error}</p>;
  return (
    <>
      <h1>Post List</h1>
      <ul>
        {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  );
};
