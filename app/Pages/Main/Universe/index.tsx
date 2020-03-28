import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  padding: 1rem;

  text-align: center;
`;

const Label = styled.div`
  margin-top: 0.5rem;

  &:first-child {
    margin-top: 0;
  }
`;

const Value = styled.div`
  font-weight: bolder;
`;

export const Universe = () => (
  <Layout>
    <Label>세계관</Label>
    <Value>Danuel</Value>
    <Label>연도</Label>
    <Value>2020년</Value>
  </Layout>
);
