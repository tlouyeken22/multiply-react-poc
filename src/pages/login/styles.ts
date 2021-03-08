import styled from "styled-components";

export const styles = {
  textField: {
    minWidth: "35%",
    marginTop: "1rem",
  },
  buttons: {
    marginTop: "1.5rem",
    minWidth: "10rem",
  },
  buttonProgress: {
    color: "red",
    position: "absolute" as "absolute",
    marginLeft: -12,
  },
};

export const ErrorBlock = styled.p`
  color: red;
  font-size: small;
`;

export const LogoWrapper = styled.div`
  margin: 1rem;
`;
export const FormWrapper = styled.div`
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  padding: 5vh;
  background-color: #fff;
  max-width: 340px;
  margin: 20vh auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
