import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Main from "../SubComponents/ItemPage/Main";
import Grid from "../SubComponents/ItemPage/Grid";

const ItemPage = ({ data }) => {
  const params = useParams();
  const itemData = data?.filter((d) => d._id === params.id)[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [itemData]);

  return (
    <div>
      <Main data={itemData} />
      <Grid data={data} filter={itemData?.category} />
    </div>
  );
};

export default ItemPage;
