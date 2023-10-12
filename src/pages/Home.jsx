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
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 items-center">
        <div className="lg:mx-32 lg:mx-10 md:mx-10 mx-3 order-last lg:order-none">
          <h5 className="mb-1">Hallo saya,</h5>
          <h1 className="lg:text-4xl md:text-3xl text-xl font-extrabold">
            TRI SAPTONO
          </h1>
          <p className="mt-5 text-justify indent-8">
            “ Saya seorang Junior Web Developer dan seorang mahasiswa di
            Universitas Perwira Purbalingga Program Studi Informatika, Sebagai
            software developer, saya memiliki kesempatan untuk berkontribusi
            pada teknologi dan perangkat lunak yang digunakan oleh banyak orang
            di seluruh dunia.”
          </p>
        </div>
        <div className="lg:mx-auto mx-auto lg:pt-5 lg:pt-0 w-64">
          <img src={fotoprofile} alt="" />
        </div>
      </div>
      <div className="pt-1 pb-10">
        <h1 className="text-center font-bold text-black lg:text-4xl md:text-3xl text-xl pt-3 skill">
          {" "}
          Skills
        </h1>
        {/* Skills */}
        <div className="lg:w-20 w-auto md:w-20 lg:flex lg:space-x-20 grid gap-6 lg:gap-0 md:flex grid-cols-7 lg:ms-40 mx-3 md:mx-12 lg:mt-10 mt-5">
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
        <h1 className="text-center font-bold lg:text-4xl md:text-3xl text-xl lg:pt-20 pt-10 portofolio">
          Portofolio
        </h1>
        <div className="lg:flex md:grid md:grid-cols-2 justify-center gap-4 lg:mx-10 mx-3 mb-5 md:mx-10">
          {gambar.map((data) => {
            return (
              <div
                key={data.id}
                className="lg:p-10 p-5 shadow hover:shadow-lg mt-10 lg:mt-20"
              >
                <img src={data.src} alt="" className="mx-auto" />
                <h1 className="font-bold text-xl mt-3">{data.nama}</h1>
                <p className="mt-5 text-justify indent-8 pb-20">
                  {data.deskripsi}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Portofolio end */}
      <div>
        <h1 className="text-center font-bold lg:text-4xl md:text-3xl text-xl lg:pt-20 pengalaman lg:mt-0 mt-10">
          Pengalaman
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 lg:mx-20 mx-3 my-20 md:mx-10">
          {pengalaman.map((data) => {
            return (
              <div
                key={data.id}
                className="shadow px-5 lg:py-10 py-2 hover:shadow-lg"
              >
                <div className="lg:w-10 w-20 mb-5 mx-auto">
                  <img src={data.src} alt="" />
                </div>
                <hr />
                <div className="flex justify-between items-end my-5">
                  <h1 className="font-bold">{data.nama}</h1>
                  <p className="text-gray-300 text-xs">{data.jabatan}</p>
                </div>
                <div className="text-justify lg:pb-10 pb-32 indent-8">
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
