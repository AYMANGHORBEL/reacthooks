import React from "react";
import { useParams } from "react-router-dom";
const Descreption = ({ film }) => {
  const params = useParams();
  const el = film.find((movie) => movie.id === Number(params.id));
  return (
    <div>
      <h3>
        <br />
        {el.descreption}
      </h3>{" "}
      <br />
      <iframe height={500} width={1000} src={el.trailer}></iframe>
    </div>
  );
};

export default Descreption;
