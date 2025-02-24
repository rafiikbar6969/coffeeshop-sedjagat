import React from "react";
import gambar1 from "/src/assets/bebas1.jpg";
import gambar2 from "/src/assets/bebas2.jpg";

import gambar3 from "/src/assets/game1.jpg";
import gambar4 from "/src/assets/game2.jpg";
import "./css/Styles.css";
import "./css/@media.css";
import BarberData from "../BarberData/BarberData";

const Barber = () => {
  return (
    <div className="destination">
      <h1>Kopi Sedjagat</h1>
      <p>Seduhan Hangat, Menyatukan Jagad.</p>

      <BarberData
        className="first-des"
        heading="kopi sejagad"
        text="Cara KopiSedjagad meracik pengalaman kopi adalah yang membuatnya berbeda dari yang lain. Didampingi oleh barista berbakat, KopiSedjagad dengan teliti memilih dan menyeduh kopi yang memiliki cerita di setiap cangkirnya—menggabungkan tradisi dengan teknik modern untuk menciptakan rasa yang tak terlupakan. Dari biji pilihan hingga penyajian yang penuh seni, setiap detail mencerminkan dedikasi dan passion. Suasana kafe yang hangat serta menu yang diracik dengan penuh keahlian menjadikannya tempat yang sempurna bagi para pecinta kopi. Di sini, setiap tegukan adalah petualangan, setiap hidangan adalah mahakarya—diciptakan untuk menyatukan banyak orang, seperti kopi yang telah melakukannya selama berabad-abad."
        image1={gambar1}
        image2={gambar2}
      />

      <BarberData
        className="first-des-reverse"
        heading="nah gatau ini judulnya pake apa"
        text="KopiSedjagad bukan sekadar tempat menikmati kopi. Selain menyajikan berbagai minuman berkualitas, kami juga menawarkan beragam hidangan lezat yang melengkapi pengalaman bersantap Anda. Lebih dari itu, kami menghadirkan ruang bagi komunitas untuk berkumpul dan bersenang-senang. Di sini, Anda bisa menikmati permainan seru seperti badminton, tenis meja, board game, hingga kartu—tempat yang sempurna untuk bersantai, berbagi cerita, dan menciptakan momen tak terlupakan."
        image1={gambar3}
        image2={gambar4}
      />
    </div>
  );
};

export default Barber;
