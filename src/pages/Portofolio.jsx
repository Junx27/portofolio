import Card from "../components/Card";
import { gambar } from "../data/data";

function Portofolio() {
  return (
    <div>
      Ini portofolio
      {gambar && gambar.map((data) => <Card key={data.id} card={data} />)}
    </div>
  );
}

export default Portofolio;
