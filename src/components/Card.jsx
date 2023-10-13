import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faCheck,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Card({ card }) {
  return (
    <div>
      <div className="lg:flex md:grid md:grid-cols-1 justify-center gap-4 lg:mx-10 mx-3 mb-5 md:mx-10">
        <div
          key={card.id}
          className="lg:p-10 p-5 shadow hover:shadow-lg mt-10 lg:mt-20"
        >
          <img src={card.src} alt="" className="mx-auto" />
          <h1 className="font-bold text-xl mt-3">{card.nama}</h1>
          <p className="mt-5 text-justify indent-8 pb-5">{card.deskripsi}</p>
          <p className="mt-5 text-justify indent-8 pb-5">{card.deskripsi2}</p>
          <h1 className="font-bold text-md">Fitur:</h1>
          <p className="mt-5 text-justify pb-5">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-2 md:gap-2 gap-0">
              <div className="">
                <div>
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                  {card.des1}
                </div>
                <div>
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                  {card.des2}
                </div>
                <div>
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                  {card.des3}
                </div>
                <div>
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                  {card.des4}
                </div>
                <div>
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                  {card.des5}
                </div>
              </div>
              <div className="">
                <div>
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                  {card.des6}
                </div>
                <div>
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                  {card.des7}
                </div>
                <div>
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                  {card.des8}
                </div>
                <div>
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                  {card.des9}
                </div>
                <div>
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                  {card.des10}
                </div>
              </div>
            </div>
          </p>
          <div className="mt-5">
            <h1 className="font-bold text-md">Information:</h1>
            <div className="grid grid-cols-2 gap-10 mt-5">
              <div>
                <p className="text-gray-500">Provider</p>
                <p className="font-bold text-md mt-2">{card.provider}</p>
              </div>
              <div>
                <p className="text-gray-500">Size</p>
                <p className="font-bold text-md mt-2">{card.size}</p>
              </div>
              <div>
                <p className="text-gray-500">Category</p>
                <p className="font-bold text-md mt-2">{card.kategori}</p>
              </div>
              <div>
                <p className="text-gray-500">Compability</p>
                <p className="font-bold text-md mt-2">{card.kompability}</p>
              </div>
              <div>
                <p className="text-gray-500">Language</p>
                <p className="font-bold text-md mt-2">{card.language}</p>
              </div>
              <div>
                <p className="text-gray-500">Age Rating</p>
                <p className="font-bold text-md mt-2">{card.age}</p>
              </div>
              <div>
                <p className="text-gray-500">In-App Purchase</p>
                <p className="font-bold text-md mt-2">{card.inapp}</p>
              </div>
              <div>
                <p className="text-gray-500">Copyright</p>
                <p className="font-bold text-md mt-2">{card.copy}</p>
              </div>
            </div>
            <div className="mt-10 text-2xl flex items-center lg:justify-normal md:justify-normal justify-between">
              <Link to={card.github} target="blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="hover:text-orange-500"
                />
              </Link>
              <span className="text-sm ms-2">github</span>
              <Link to={card.preview} target="blank">
                <FontAwesomeIcon
                  icon={faEye}
                  className="ms-10 hover:text-orange-500"
                />
              </Link>
              <span className="text-sm ms-2">preview</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
