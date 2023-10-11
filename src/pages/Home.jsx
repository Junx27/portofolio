import fotoprofile from "../assets/images/fotoprofile.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css-3.png";
import js from "../assets/images/js.png";
import react from "../assets/images/library.png";
import bootstrap from "../assets/images/bootstrap.png";
import tailwind from "../assets/images/tailwind.png";
import ai from "../assets/images/illustrator.png";
import { gambar, pengalaman } from "../data/data.js";

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
        <h1 className="text-center font-bold text-white text-4xl pt-3 skill">
          {" "}
          Skills
        </h1>
        {/* Skills */}
        <div className="lg:w-32 w-56 lg:flex lg:space-x-20 grid gap-6 lg:gap-0 grid-cols-2 lg:ms-7 mx-auto lg:mt-10">
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
        <div className="flex justify-center gap-4 mx-10 mb-5">
          {gambar.map((data) => {
            return (
              <div
                key={data.id}
                className="p-10 shadow hover:shadow-orange-300"
              >
                <img src={data.src} alt="" className="mx-auto" />
                <h1 className="font-bold text-xl mt-3">{data.nama}</h1>
                <p className="mt-5 text-justify">{data.deskripsi}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Portofolio end */}
      <div>
        <h1 className="text-center font-bold text-4xl lg:pt-20 pengalaman">
          Pengalaman
        </h1>
        <div className="grid grid-cols-4 gap-10 mx-20 my-20">
          {pengalaman.map((data) => {
            return (
              <div
                key={data.id}
                className="shadow px-5 py-10 hover:shadow-orange-300"
              >
                <div className="w-10 mb-5 mx-auto">
                  <img src={data.src} alt="" />
                </div>
                <hr />
                <div className="flex justify-between items-center w-10">
                  <h1 className="font-bold my-5 text-sm">{data.nama}</h1>
                  <p className="text-xs ms-20 text-gray-300">{data.jabatan}</p>
                </div>
                <div className="text-justify">
                  <p>{data.deskripsi}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
