import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";
import { Navigation } from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
export default function Corporate() {
  const { clients: url } = dataStorage.backgroundsUrl.volvo;
  return (
    <MainLayout url={url}>
      <Navigation site="servis-volvo" />
    </MainLayout>
  );
}
