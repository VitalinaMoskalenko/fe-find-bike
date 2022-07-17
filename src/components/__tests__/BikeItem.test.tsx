import 'jest-styled-components';
import React from 'react';
import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';

import { BikeItem } from '../BikeItem';
import { TestWrapper } from '../TestWrapper';

describe('BikeItem Tests', () => {
  it('should display all passed data', () => {
    const { getByText } = render(
      <TestWrapper>
        <BikeItem title="title" frameColor="frameColor" frameModel="frameModel" isStolen={false} />
      </TestWrapper>,
    );
    const titleElement = getByText('title');
    const frameColorElement = getByText('frameColor');
    const frameModelElement = getByText('frameModel');

    expect(titleElement).toBeInTheDocument();
    expect(frameColorElement).toBeInTheDocument();
    expect(frameModelElement).toBeInTheDocument();
  });

  it('should display stolen indicator', () => {
    const { getByText } = render(
      <TestWrapper>
        <BikeItem title="title" frameColor="frameColor" frameModel="frameModel" isStolen />
      </TestWrapper>,
    );
    const stolenElement = getByText('Stolen');

    expect(stolenElement).toBeInTheDocument();
  });

  it('should call on click method', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <TestWrapper>
        <BikeItem
          title="title"
          frameColor="frameColor"
          frameModel="frameModel"
          isStolen
          onClick={onClickMock}
        />
      </TestWrapper>,
    );
    const bikeElement = getByTestId('BikeItem');
    fireEvent.click(bikeElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
