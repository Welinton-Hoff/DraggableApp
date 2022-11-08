import React, {useState} from 'react';

import DraggableFlatList, {
  ScaleDecorator,
  RenderItemParams,
} from 'react-native-draggable-flatlist';

import {initialData, ItemSchema} from './scripts';
import {Label, Button, Container} from './styles';

export function Home() {
  const [data, setData] = useState(initialData);

  const renderItem = ({item, drag, isActive}: RenderItemParams<ItemSchema>) => (
    <ScaleDecorator>
      <Button
        onLongPress={drag}
        disabled={isActive}
        backgroundColor={isActive ? 'red' : item.backgroundColor}>
        <Label>{item.label}</Label>
      </Button>
    </ScaleDecorator>
  );

  return (
    <Container>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        onDragEnd={({data}) => setData(data)}
      />
    </Container>
  );
}
