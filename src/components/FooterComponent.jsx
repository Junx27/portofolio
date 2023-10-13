import { navigation } from "../data/data";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import dicoding from "../assets/images/learn/dicoding.png";
import idcamp from "../assets/images/learn/idcamp.png";
function FooterComponent() {
  return (
    <div className="lg:px-20 ps-10 pb-10 dark:bg-black dark:text-white">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4">
        <div className="lg:mx-5">
          <h1 className="text-md font-bold">LEARN PATH</h1>
          <div className="w-20">
            <img src={dicoding} alt="" className="dark:bg-white mt-5" />
            <img src={idcamp} alt="" className="dark:bg-white mt-5" />
          </div>
        </div>
        <div className="lg:mx-5 lg:mt-0 mt-10 md:mt-0">
          <div className="text-md font-bold">NAVIGATION</div>
          <div className="mt-4">
            {navigation.map((data) => {
              return (
                <NavLink
                  to={data.href}
                  key={data.id}
                  className="flex flex-row my-2 hover:text-orange-500"
                >
                  <li>{data.name}</li>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="lg:mx-5 lg:mt-0 mt-10">
          <div className="text-md font-bold mb-5">SKILL</div>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJs</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
          <li>Adobe Illustrator</li>
        </div>
        <div className="lg:mx-5 lg:mt-0 mt-10">
          <div className="text-md font-bold mb-5">SUBSCRIBE</div>
          <input
            type="email"
            placeholder="your@mail.com"
            className="border border-orange-500 px-3 py-1 rounded-l-full w-40 dark:bg-black"
          />
          <button className="ps-2 pe-2 bg-orange-500 py-1 border border-orange-500 hover:border-orange-400 rounded-r-full text-white hover:bg-orange-400">
            kirim
          </button>
          <div className="flex flex-row mt-5 text-2xl">
            <FontAwesomeIcon
              icon={faFacebook}
              className="mx-3 hover:text-orange-500"
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="mx-3 hover:text-orange-500"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="mx-3 hover:text-orange-500"
            />
            <FontAwesomeIcon
              icon={faTiktok}
              className="mx-3 hover:text-orange-500"
            />
          </div>
        </div>
      </div>
      <div className="text-xs mt-10 text-gray-400">
        Copy Right by Junx &copy; 2023 CV Portofolio,-
      </div>
    </div>
  );
}

export default FooterComponent;
