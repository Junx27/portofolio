import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
function Card({ card }) {
  return (
    <div>
      <div className="lg:flex md:grid md:grid-cols-2 justify-center gap-4 lg:mx-10 mx-3 mb-5 md:mx-10">
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
            <ol>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des1}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des2}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des3}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des4}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des5}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des6}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des7}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des8}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des9}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des10}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des11}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des12}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des13}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des14}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des15}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des16}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des17}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des18}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des19}
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
                {card.des20}
              </li>{" "}
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
