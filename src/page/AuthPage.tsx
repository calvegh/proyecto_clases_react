import { useFetch } from "../hooks/useFetch";
import { MainLayout } from "../layout/MainLayout";

export const AuthPage = () => {
  const { data, error, loading } = useFetch<{ message: string }>(
    "http://localhost:3001/secure-jwt/get_endpoint"
  );
  if (loading)
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  if (error)
    return (
      <MainLayout>
        <p>Error en la consulta de datos{error}</p>
      </MainLayout>
    );
  return (
    <MainLayout>
      <div className="container">
        <h1>Auth Page</h1>
        <h2>{data?.message}</h2>
      </div>
    </MainLayout>
  );
};
