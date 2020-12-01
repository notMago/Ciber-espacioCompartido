import { Fragment, useState, useRef, useEffect } from "react";

const Opciones = () => {
  const [ramos, setRamos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("api/verRamos");
    const ramos2 = await data.json();
    setRamos(ramos2);
  };

  return (
    <Fragment>
      {ramos.map((item, indice) => (
        <option key={indice} valor={item.ramo}>
          {item.ramo}
        </option>
      ))}
    </Fragment>
  );
};

export default Opciones;
