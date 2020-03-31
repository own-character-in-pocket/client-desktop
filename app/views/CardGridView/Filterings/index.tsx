import React from 'react';
import styled from 'styled-components';
import { Filter, FilterType } from './Filter';

const Layout = styled.div`
  padding: 1rem;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bolder;
`;

const Filters = styled.div`
  width: 8rem;
`;

export const Filterings = () => (
  <Layout>
    <Title>필터</Title>
    <Filters>
      <Filter type={FilterType.Text} label="이름" value="Danuel" />
      <Filter type={FilterType.Number} label="나이" value={17} />
    </Filters>
  </Layout>
);
