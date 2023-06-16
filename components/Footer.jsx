import css from "../styles/Footer.module.css";
import { UilInstagram, UilWhatsapp } from "@iconscout/react-unicons";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={css.container}>
      <span className="text-red-kokumi">ALL RIGHT RESERVED</span>
      <div className={css.social}>
        <UilInstagram size={45} color="#fff" />
        <UilWhatsapp size={45} color="#fff" />
      </div>
      <div className={css.logo}>
        <Image src="/image/Logo.png" alt="Logo" width={50} height={50} />
        <span className="ml-4 text-red-kokumi">Kokumi Drink</span>
      </div>
    </div>
  );
}
