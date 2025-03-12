import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner () {
    return (
        <div className = {styles.banner}>
            <Image src = {'/img/banner.webp'} alt = 'cover' fill = {true} style={{ objectFit: "cover" }}></Image>
            <div className = {styles.bannerText}>
                <h1>where every event finds its venue</h1>
                <h3>Find your dream venue in an instant—just one click away!</h3>
            </div>
        </div>
    );
}