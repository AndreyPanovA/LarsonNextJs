import Router from "next/router";
import MainLayout from "../../components/MainLayout";
export default function KuzovPage() {
  const linkClickHandler = () => {
    Router.push("/");
  };
  return (
    <MainLayout>
      <h1>Hellow Kuzov</h1>
      <button onClick={linkClickHandler}>Go back to home</button>
    </MainLayout>
  );
}
