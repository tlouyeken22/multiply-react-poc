import React, { Component } from "react";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { RouteComponentProps, Redirect } from "react-router-dom";

import { processRegister } from "../../store/actions/authActions";
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
  register: (newUserInfo: any) => void;
  registerStatus: boolean;
}

interface IState {
  email: string;
  password: string;
  errorMessage: string;
  [x: string]: any;
}

class RegisterPage extends Component<IProps & RouteComponentProps, IState> {
  public state: IState = {
    email: "",
    password: "",
    errorMessage: "",
    firstName: "",
    lastName: "",
    hasError: false,
  };

  private handleOnClickRegister() {
    const { email, password, firstName, lastName } = this.state;

    // TODO - do proper error handling on each field ('_')
    if (email && password && firstName && lastName != null) {
      this.props.register({ email, password, firstName, lastName });
    } else {
      this.setState({
        errorMessage: "Please complete all fields correctly",
      });
    }
  }

  private handleOnClickLogin() {
    const { history } = this.props;
    history.push("/");
  }

  render() {
    const { loading, authError, registerStatus } = this.props;
    const { errorMessage } = this.state;

    if (registerStatus === true) return <Redirect to="/" />;

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
        <TextField
          label="First Name"
          onChange={(e) => this.setState({ firstName: e.target.value })}
          style={styles.textField}
        />
        <TextField
          label="Last Name"
          onChange={(e) => this.setState({ lastName: e.target.value })}
          style={styles.textField}
        />

        <ErrorBlock>{authError || errorMessage}</ErrorBlock>

        <ButtonWrapper>
          <Button
            color="inherit"
            onClick={() => this.handleOnClickLogin()}
            variant="contained"
            disabled={loading}
            style={styles.buttons}
          >
            Go to Login
          </Button>
          <Button
            color="primary"
            onClick={() => this.handleOnClickRegister()}
            variant="contained"
            disabled={loading}
            style={styles.buttons}
          >
            Register
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
  const { authError, loading, registerStatus } = state.auth;
  const { auth } = state.firebase;
  return {
    authError,
    auth,
    loading,
    registerStatus,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    register: (credentials: any) => dispatch(processRegister(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
