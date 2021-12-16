import React from "react";
import { Item } from "semantic-ui-react";

const CvCard = ({ cv }) => {
  return (
    <Item>
      <Item.Image size="small" src={cv.image} />

      <Item.Content>
        <Item.Header as="a">{cv.name}</Item.Header>
        <Item.Header as="a">{cv.prework}</Item.Header>
        <Item.Extra>{cv.email}</Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default CvCard;
