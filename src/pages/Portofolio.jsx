import Card from "../components/Card";
import { gambar } from "../data/data";

function Portofolio() {
  return (
    <div className="mb-20 lg:mx-20">
      {gambar && gambar.map((data) => <Card key={data.id} card={data} />)}
    </div>
  );
}

export default Portofolio;
