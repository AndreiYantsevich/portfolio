import React, { FC, memo } from "react";

type PropsType = {
  title: string;
  span: string;
};

const Tittle: FC<PropsType> = memo(({ title, span }) => (
  <div className="Title">
    <h3>
      {title}
      <span> {span}</span>
    </h3>
  </div>
));

export default Tittle;
