import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  --padding: 16px;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: var(--padding);
  }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  gap: var(--padding);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  display: grid;
  gap: var(--padding);
  grid-template-columns: repeat(
    auto-fill,
    minmax(calc(50% - (var(--padding) * 2)), 1fr)
  );

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    max-width: calc(100vw - (var(--padding) * 2));
    overflow: auto;
    padding-bottom: 8px;

    > * {
      flex: 1;
      min-width: 220px;
    }
  }

  @media ${QUERIES.laptopAndUp} {
    border-left: 1px solid var(--color-gray-300);
    padding-left: var(--padding);
  }
`;

export default SpecialtyStoryGrid;
