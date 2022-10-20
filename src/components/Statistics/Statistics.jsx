import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatsList,
  StatsItem,
  Label,
  Precentage,
  RandomColor,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} style={{ backgroundColor: RandomColor()}}>
            <Label>{label}</Label>
            <Precentage>{percentage}%</Precentage>
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
