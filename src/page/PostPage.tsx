export interface IPost {
  id?: number;
  userId: number;
  title: string;
  content: string;
  imagen?: string;
}
export const PostPage = () => {
  return (
    <div>
      <h1>Post</h1>
      <p>Esta es la pagina de Post</p>
    </div>
  );
};
