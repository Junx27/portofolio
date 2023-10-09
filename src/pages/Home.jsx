import fotoprofile from "../assets/images/fotoprofile.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css-3.png";
import js from "../assets/images/js.png";
import react from "../assets/images/library.png";
import bootstrap from "../assets/images/bootstrap.png";
import tailwind from "../assets/images/tailwind.png";
import ai from "../assets/images/illustrator.png";

function Home() {
  return (
    <div className="homepage pt-32 lg:pt-56">
      <div className="lg:grid grid-cols-2 gap-2 items-center">
        <div className="lg:mx-32 mx-10">
          <h5 className="mb-1">Hallo saya,</h5>
          <h1 className="text-4xl font-extrabold">TRI SAPTONO</h1>
          <p className="mt-5 text-justify">
            “ Saya seorang Junior Web Developer dan seorang mahasiswa di
            Universitas Perwira Purbalingga Program Studi Informatika, Sebagai
            software developer, saya memiliki kesempatan untuk berkontribusi
            pada teknologi dan perangkat lunak yang digunakan oleh banyak orang
            di seluruh dunia.”
          </p>
        </div>
        <div className="lg:mx-auto ms-6 pt-20 lg:pt-0">
          <img src={fotoprofile} alt="" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-400 to-orange-600 container-skill">
        <h1 className="text-center font-bold text-white text-4xl lg:pt-56 pt-10 skill">
          {" "}
          Skills
        </h1>
        {/* Skills */}
        <div className="lg:w-32 w-56 lg:flex lg:space-x-20 grid gap-6 lg:gap-0 grid-cols-2 lg:ms-7 mx-auto lg:mt-20 mt-10">
          <img
            src={html}
            alt=""
            className="brightness-100 hover:brightness-110"
          />
          <img
            src={css}
            alt=""
            className="brightness-100 hover:brightness-110"
          />
          <img
            src={js}
            alt=""
            className="brightness-100 hover:brightness-110"
          />
          <img
            src={react}
            alt=""
            className="brightness-100 hover:brightness-110"
          />
          <img
            src={bootstrap}
            alt=""
            className="brightness-100 hover:brightness-110"
          />
          <img
            src={tailwind}
            alt=""
            className="brightness-100 hover:brightness-110"
          />
          <img
            src={ai}
            alt=""
            className="brightness-100 hover:brightness-110"
          />
        </div>
        {/* Skill end */}
      </div>
      {/* Portofolio */}
      <div>
        <h1 className="text-center font-bold text-4xl lg:pt-20 pt-10 portofolio">
          Portofolio
        </h1>
      </div>
      {/* Portofolio end */}
    </div>
  );
}

export default Home;
