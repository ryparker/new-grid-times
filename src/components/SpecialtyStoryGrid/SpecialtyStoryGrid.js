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

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: minmax(0px, auto);
    gap: var(--padding);
  }
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr minmax(0px, 1fr);
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

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: revert;
    display: flex;
    overflow: auto;
    padding-bottom: 8px;

    > * {
      flex: 1;
      min-width: 220px;
    }
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
    border-left: 1px solid var(--color-gray-300);
    padding-left: var(--padding);
  }
`;

export default SpecialtyStoryGrid;
