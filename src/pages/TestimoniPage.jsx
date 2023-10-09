import { useEffect, useState } from "react";
import { value } from "../../public/data/user.js";

function TestimoniPage() {
  // const [value, setValue] = useState([]);
  // const getData = () => {
  //   fetch("data")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((myjson) => {
  //       setValue(myjson);
  //     });
  // };
  useEffect(() => {
    // getData();
    setData(value);
  }, []);
  //start filtering
  const [data, setData] = useState(value);
  const filterResult = (catItem) => {
    const result = value.filter((curData) => {
      return curData.kategori === catItem;
    });
    setData(result);
  };
  //end filtering
  return (
    <div className="mt-5 pt-5 container">
      <button onClick={() => filterResult("pria")}>Pria</button>
      <button onClick={() => filterResult("wanita")}>Wanita</button>
      {data.map((data) => {
        return (
          <h1 key={data.id} className="fw-bold">
            {data.nama}
          </h1>
        );
      })}
    </div>
  );
}

export default TestimoniPage;
