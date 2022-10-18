import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatsList,
  StatsItem,
  Label,
  Precentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <StatsList>
        {stats.map(({ id, label, precentage }) => (
          <StatsItem key={id}>
            <Label>{label}</Label>
            <Precentage>{precentage}%</Precentage>
          </StatsItem>
        ))}
      </StatsList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  ststs: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      precentage: PropTypes.number.isRequired,
    })
  ),
};
