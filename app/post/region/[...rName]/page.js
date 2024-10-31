import React from "react";

const RegionNamePage = async ({ params }) => {
  const paramsData = await params;
  console.log(paramsData);

  return <div>{paramsData.rName}</div>;
};

export default RegionNamePage;
