import React from "react";

const Search = ({ params }: { params: { catName: string } }) => {
  return <div>{params.catName}</div>;
};

export default Search;
