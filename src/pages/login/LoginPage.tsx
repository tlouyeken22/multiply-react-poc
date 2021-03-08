import React, { Component } from "react";
import { Button, TextField, CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import { Redirect, withRouter, RouteComponentProps } from "react-router-dom";
import { processLogin } from "../../store/actions/authActions";
import multiplyLogo from "../../assets/assets/images/multiply-logo.svg";
import {
  LogoWrapper,
  styles,
  FormWrapper,
  ErrorBlock,
  ButtonWrapper,
} from "./styles";

interface IProps {
  auth: any;
  authError: string;
  loading: boolean;
  login: (credentials: any) => void;
}

interface IState {
  email: string;
  errorMessage: string;
  hasError: boolean;
  password: string;

  [x: string]: any;
}

class LoginPage extends Component<IProps & RouteComponentProps, IState> {
  public state: IState = {
    email: "",
    password: "",
    errorMessage: "",
    hasError: false,
  };

  private handleOnClickLogin() {
    const { email, password } = this.state;
    if (email !== null && password !== null) {
      this.props.login({ email, password });
    } else {
      this.setState({
        errorMessage: "Please enter email and password",
      });
    }
  }

  private handleOnClickRegister() {
    const { history } = this.props;
    history.push("/register");
  }

  render() {
    const { auth, loading, authError } = this.props;
    if (auth.uid) return <Redirect to="/home" />;

    return (
      <FormWrapper>
        <LogoWrapper>
          <img alt="Multiply" src={multiplyLogo} />
        </LogoWrapper>
        <TextField
          autoFocus
          label="Email"
          onChange={(e) => this.setState({ email: e.target.value })}
          style={styles.textField}
        />
        <TextField
          label="Password"
          onChange={(e) => this.setState({ password: e.target.value })}
          style={styles.textField}
          type="password"
        />

        <ErrorBlock>{authError}</ErrorBlock>

        <ButtonWrapper>
          <Button
            color="inherit"
            onClick={() => this.handleOnClickRegister()}
            variant="contained"
            disabled={loading}
            style={styles.buttons}
          >
            Go to Register
          </Button>
          <Button
            color="primary"
            onClick={() => this.handleOnClickLogin()}
            variant="contained"
            disabled={loading}
            style={styles.buttons}
          >
            Login
            {loading && (
              <CircularProgress size={24} style={styles.buttonProgress} />
            )}
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { authError, loading } = state.auth;
  const { auth } = state.firebase;
  return {
    authError,
    auth,
    loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (credentials: any) => dispatch(processLogin(credentials)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginPage)
);
