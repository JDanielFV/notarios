import styled from "styled-components";

const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Space between images */
  margin-top: auto; /* Pushes the logos to the bottom of the flex container */
  padding-top: 40px; /* Add some padding above the logos */
  padding-bottom: 20px; /* Add some padding below the logos */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding-top: 30px;
    padding-bottom: 15px;
  }
`;

const LogoImage = styled.img`
  max-width: auto; /* Adjust as needed */
  height: 4em;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.4));
`;

const LogosInferiores = () => {
  return (
    <LogosWrapper>
      <LogoImage src='./logo1.png' alt="Logo 1" />
      <LogoImage src='./splash.png' alt="Logo 2" />
    </LogosWrapper>
  );
};

export default LogosInferiores;