import fotoprofile from "../assets/images/fotoprofile.png";

function TentangSaya() {
  return (
    <div className="pt-32 pb-20 lg:px-32 px-10 dark:bg-black dark:text-white">
      <img src={fotoprofile} alt="" className="lg:w-52 w-32 mx-auto" />
      <h1 className="font-bold text-md">Biodata</h1>
      <div className="mt-10 grid grid-cols-2 text-xs lg:text-base md:text-base lg:mb-0 md:mb-0 mb-20">
        <ul>
          <li>Nama</li>
          <li>Tempat/Tgl.Lahir</li>
          <li>Alamat</li>
          <li>No.tlp</li>
          <li>Email</li>
        </ul>
        <ul>
          <li>: Tri Saptono</li>
          <li>: Purbalingga, 27/09/1991</li>
          <li>: Wanogara Wetan</li>
          <li>: 081217114742</li>
          <li>: junxitsumo@gmail.com</li>
        </ul>
      </div>
      <div className="my-10">
        <h1 className="font-bold text-md">Call Me</h1>
        <div className="grid grid-cols-2 gap-2 my-5">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="your@mail.com...."
            className="border border-orange-500 px-3 py-1 w-40 lg:w-52 md:w-52 rounded-full dark:bg-black"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 my-5">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            placeholder="your number...."
            className="border border-orange-500 px-3 py-1 w-40 lg:w-52 md:w-52 rounded-full dark:bg-black"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 my-5">
          <label htmlFor="text">Message</label>
          <input
            id="textl"
            type="text"
            placeholder="your text...."
            className="border border-orange-500 px-3 py-1 w-40 lg:w-52 md:w-52 rounded-full dark:bg-black"
          />
        </div>
        <div className="mt-10 flex justify-center lg:justify-end md:justify-end">
          <button className="bg-orange-500 px-5 py-2 hover:bg-orange-300 rounded-full">
            kirim
          </button>
        </div>
      </div>
    </div>
  );
}

export default TentangSaya;
