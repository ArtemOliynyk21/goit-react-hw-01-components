import styled from '@emotion/styled';

export const Container = styled.section`
  max-width: 400px;
  background-color: white;
  margin: 30px auto;
  border-radius: 5px;
`;

export const Title = styled.h2`
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
  text-transform: uppercase;
  color: gray;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: calc(100% / 5);
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Precentage = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

export const RandomColor = () => `
  #${Math.floor(Math.random() * 16777215).toString(16)}
`;
