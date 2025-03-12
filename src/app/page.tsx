import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main style= {{ backgroundColor : "white"}}>
      <Banner/>
      <div className="m-5 flex flex-row flex-wrap justify-around content-around">
        <Card imgSrc={"/img/bloom.jpg"} venueName={"The Bloom Pavilion"}/>
        <Card imgSrc={"/img/sparkspace.jpg"} venueName={"Spark Space"}/>
        <Card imgSrc={"/img/grandtable.jpg"} venueName={"The Grand Table"}/>
      </div>
    </main>
  );
}
