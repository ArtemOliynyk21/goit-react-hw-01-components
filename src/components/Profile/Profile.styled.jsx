import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  max-width: 400px;
  margin: 30px auto;
`;

export const Description = styled.div`
  text-align: center;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  width: 300px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border-radius: 50%;
  background-color: #826222;
`;

export const Name = styled.p`
  font-size: 28px;
`;

export const Tag = styled.p`
  margin-top: 10px;
  font-size: 20px;
  color: gray;
`;

export const Location = styled.p`
  margin-top: 10px;
  font-size: 20px;
  color: gray;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  background-color: aliceblue;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);
  padding: 15px 0;
  border: 1px solid gray;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: gray;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
