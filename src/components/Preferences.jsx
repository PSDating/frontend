import React from "react";
import { Image, Item, Label, Icon } from 'semantic-ui-react';

const Preference = ({ id, label, icon, selected, updatePreference }) => {
  return (
    <Item className={selected ? 'selected' : ''} onClick={e => {
      e.preventDefault();
      updatePreference({
        id,
        value: !selected
      });
    }}>
      <Item.Content>
        <Label size='huge'>
          <Icon name={icon} />
          {label}
        </Label>
      </Item.Content>
    </Item>
  )
}

const Preferences = ({ preferences, updatePreference, categories }) => {
  return (
    <Item.Group>
      {
        categories.map(category => <Preference key={category.id} id={category.id} selected={preferences.includes(category.id)} label={category.label} icon={category.icon} updatePreference={updatePreference} />)
      }
    </Item.Group>
  )
}

export default Preferences;