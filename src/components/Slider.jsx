import React from 'react';
import styled from 'styled-components';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const Container = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    background-color:coral;
    position:relative;
`
const Arrow = styled.div`
    height:50px;
    width:50px;
    background-color:#fff7f7;
    display:flex;
    border-radius:50%;
    align-items:center;
    justify-content:center;
    position: absolute;
`

export const Slider = () => {
  return (
      <Container>
        <Arrow>
            <ArrowLeftIcon/>
        </Arrow>
        <Arrow>
            <ArrowRightIcon/>
        </Arrow>
      </Container>
  );
};
