import Card from "../components/Card";
import { gambar } from "../data/data";

function Portofolio() {
  return (
    <div className="pb-20 lg:px-20 pt-10 dark:bg-black dark:text-white">
      {gambar && gambar.map((data) => <Card key={data.id} card={data} />)}
    </div>
  );
}

export default Portofolio;
