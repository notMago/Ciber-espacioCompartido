import { Fragment, useState, useRef, useEffect } from "react";

const Opciones2 = () => {
  const [link, setLink] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("api/verApunte2");
    const ramos2 = await data.json();
    setLink(ramos2);
  };

  return (
    <Fragment>
      {link.map((item, indice) => (
        <option key={indice} valor={item.link}>
          {item.link}
        </option>
      ))}
    </Fragment>
  );
};

export default Opciones2;
