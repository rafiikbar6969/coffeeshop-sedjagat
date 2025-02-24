import React from "react";
import LayananData from "../LayananData/LayananData";
import "./css/Styles.css";
import "./css/@media.css";
import gambar1 from "/src/assets/layanan1.jpg";
import gambar2 from "/src/assets/layanan2.jpg";
import gambar3 from "/src/assets/layanan3.jpg";

const Layanan = () => {
  return (
    <div className="layanan">
      <h1>Games Kami</h1>
      <p>Kami Juga Menyediakan Banyak games LOH</p>
      <div className="layanancard">
        <LayananData
          image={gambar1}
          heading="Board Games"
          text="kami juga menghadirkan pengalaman seru melalui berbagai board games yang bisa dimainkan bersama teman dan keluarga semuanya tersedia untuk menambah keseruan waktu santai Anda. "
        />

        <LayananData
          image={gambar2}
          heading="Card Games"
          text="Kami juga menyediakan card games dari berbagai card games yang bisa dimainkan bersama teman dan keluarga. Dari permainan klasik seperti UNO dan Remi hingga permainan strategi yang menguji kecerdasan dan keberuntungan, semuanya tersedia untuk menambah keceriaan waktu santai Anda."
        />

        <LayananData
          image={gambar3}
          heading="Tennis etc"
          text="menyediakan area olahraga seperti tenis meja dan bulu tangkis untuk menambah keseruan waktu santai Anda. Baik untuk bersenang-senang bersama teman maupun berkompetisi. Dengan fasilitas yang nyaman dan lingkungan yang mendukung, tempat ini menjadi pilihan ideal untuk melepas penat, tetap aktif, dan menikmati momen kebersamaan. "
        />
      </div>
    </div>
  );
};

export default Layanan;
