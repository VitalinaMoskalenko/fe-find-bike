import React from 'react';

import styled from 'styled-components';

import { Bike } from '../../../types/models/Bike';
import { BikeItem } from './BikeItem';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

type PropsTypes = {
  bikes?: Bike[];
};

export const BikeList: React.FC<PropsTypes> = ({ bikes }) => {
  return (
    <Container>
      {bikes &&
        bikes.map((item) => {
          return (
            <BikeItem
              key={item.id}
              title={item.title}
              frameColor={item.frame_colors.join(', ')}
              frameModel={item.frame_model}
              isStolen={item.stolen}
            />
          );
        })}
    </Container>
  );
};
