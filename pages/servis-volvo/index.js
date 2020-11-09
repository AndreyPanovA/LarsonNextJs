import Router from "next/router";
import MainLayout from "../../components/MainLayout";
import Navigation from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
export default function ServisVolvo() {
  const { about: url } = dataStorage.backgroundsUrl;
  return (
    <MainLayout url={url}>
      <Navigation site="servis-volvo" link="about" />
    </MainLayout>
  );
}
