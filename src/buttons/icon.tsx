import React from "react";

type Props = {
  format: (name: string) => string;
  name: string;
  size: string | number;
};

export const Icon = ({ name, size, format }: Props) => {
  return <i className={format(name)} style={{ fontSize: size }} />;
};


export default Icon;
