import React from "react";
import { Image, Item } from 'semantic-ui-react';

const categories = [
  {
    id: 1,
    label: "cat1",
    image: "https://react.semantic-ui.com/assets/images/wireframe/image.png"
  },
  {
    id: 2,
    label: "cat2",
    image: "https://react.semantic-ui.com/assets/images/wireframe/image.png"
  },
  {
    id: 3,
    label: "cat3",
    image: "https://react.semantic-ui.com/assets/images/wireframe/image.png"
  }
];

const Preference = ({ label, image }) => {
  return (
    <Item>
      <Item.Image size='tiny' src={image} />
      <Item.Content>
        {label}
      </Item.Content>
    </Item>
  )
}

const Preferences = () => {
  return (
    <Item.Group>
      {
        categories.map(category => <Preference label={category.label} image={category.image} />)
      }
    </Item.Group>
  )
}

export default Preferences;
