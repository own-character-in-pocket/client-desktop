import { Color, Radius } from '@app/constants/CSSVariables';
import { Styleable } from '@app/typings/styleable';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  overflow: hidden;

  position: relative;

  height: 0;

  padding-bottom: calc(100% + 1.5rem);

  border-radius: ${Radius.Normal};

  transition-property: box-shadow;
  transition-timing-function: linear;

  &[data-is-clickable='true'] {
    cursor: pointer;
  }

  &:hover {
    box-shadow: 0 0 16px 0 ${Color.BoxShadowHover};
  }
`;

const Top = styled.div`
  overflow: hidden;

  position: relative;

  padding-bottom: 100%;

  border-radius: ${Radius.Normal};
`;

const Bottom = styled.div`
  position: relative;

  padding-bottom: 1.5rem;

  text-align: center;
`;

const Guard = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100%;
`;

type Props = Styleable & {
  children: ReactNode;
  onClick?: () => void;
};

export const Card = ({ className, style, children, onClick }: Props) => (
  <Layout className={className} style={style} onClick={onClick} data-is-clickable={!!onClick}>
    {children}
  </Layout>
);

type TopProps = {
  children: ReactNode;
};

Card.Top = ({ children }: TopProps) => (
  <Top>
    <Guard>{children}</Guard>
  </Top>
);

type BottomProps = {
  children: ReactNode;
};

Card.Bottom = ({ children }: BottomProps) => (
  <Bottom>
    <Guard>{children}</Guard>
  </Bottom>
);
