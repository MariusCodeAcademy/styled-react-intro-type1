import styled from 'styled-components';

const CardStyled = styled.article`
  padding: 1rem;
  background-color: snow;
  box-shadow: 3px 3px 10px lightgrey;
  text-align: left;
`;

const IconStyled = styled.div``;

const ServiceTitle = styled.h3`
  color: #271de8;
  margin: 0.8rem 0;
`;

const ServiceText = styled.p`
  color: gray;
`;

const ServiceLink = styled.a`
  color: #271de8;
  text-decoration: none;
`;

function ServiceCard() {
  return (
    <CardStyled>
      <IconStyled>icon</IconStyled>
      <ServiceTitle>UI &amp; UX Design</ServiceTitle>
      <ServiceText>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </ServiceText>
      <ServiceLink href='/'>Read more</ServiceLink>
    </CardStyled>
  );
}

export default ServiceCard;
