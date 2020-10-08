import { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "../../styles/review.module.scss";
export default function Tries({ json }) {
  const { tires: url } = dataStorage.backgroundsUrl.volvo;
  return <MainLayout url={url}></MainLayout>;
}
