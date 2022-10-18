import styled from "@emotion/styled";

export const Container = styled.section`
  width: 500px;
  background-color: white;
  margin: 30px auto;
  border-radius: 4px;
`;

export const Title = styled.h2`
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    text-transform: uppercase;
`
export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Precentage = styled.span`
    font-size: 20px;
    font-weight: 500;
`;