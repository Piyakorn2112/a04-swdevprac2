import styles from "./card.module.css";
import Image from "next/image";

export default function Card ({
    venueName="",
    imgSrc=""
} = {}) {
    return (
        <div className = {styles.card}>
            <div className = {styles.cardimg}>
                <Image src = {imgSrc} alt = 'venue img' fill = {true} style={{ objectFit: "cover" }}></Image>
            </div>
            <div className={styles.cardtext}>
                <h3>{venueName}</h3>
                <p className={styles.cardlocation}>
                Location: City Center
                </p>
                <p>
                Host an unforgettable celebration at our vibrant party venue. 
                With spacious event halls, a lively atmosphere, and top-tier service, 
                we create the perfect setting for birthdays, corporate events, 
                and special gatherings.
                </p>
                <p className={styles.cardprice}>
                Starting from $3,000
                </p>
            </div>
        </div>
    );
}