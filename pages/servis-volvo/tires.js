import MainLayout from "../../components/MainLayout";
import dataStorage from "../../components/dataStorage/dataStorage";
export default function Tries({ json }) {
  const { tires: url } = dataStorage.backgroundsUrl.volvo;
  return <MainLayout url={url}></MainLayout>;
}
