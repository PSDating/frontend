import React from "react";
import { Image, Item } from 'semantic-ui-react';

const categories = [
  {
    id: "1",
    label: "cat1",
    image: "https://react.semantic-ui.com/assets/images/wireframe/image.png"
  },
  {
    id: "2",
    label: "cat2",
    image: "https://react.semantic-ui.com/assets/images/wireframe/image.png"
  },
  {
    id: "3",
    label: "cat3",
    image: "https://react.semantic-ui.com/assets/images/wireframe/image.png"
  }
];

const Preference = ({ id, label, image, selected, updatePreference }) => {
  return (
    <Item className={selected ? 'selected' : ''} onClick={e => {
      e.preventDefault();
      updatePreference({
        id,
        value: !selected
      });
    }}>
      <Item.Image size='tiny' src={image} />
      <Item.Content>
        {label}
      </Item.Content>
    </Item>
  )
}

const Preferences = ({preferences, updatePreference}) => {
  return (
    <Item.Group>
      {
        categories.map(category => <Preference key={category.id} id={category.id} selected={preferences.includes(category.id)} label={category.label} image={category.image} updatePreference={updatePreference} />)
      }
    </Item.Group>
  )
}

export default Preferences;
