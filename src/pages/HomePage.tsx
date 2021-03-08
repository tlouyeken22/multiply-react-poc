import React, { Component } from "react";
import NavBar from "../components/nav-bar/NavBar";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import NewsCard from "../components/news-card/NewsCard";
import { connect } from "react-redux";
import { processLogout } from "../store/actions/authActions";
import { processFetchNews } from "../store/actions/newsActions";
import { Redirect } from "react-router-dom";

interface IProps {
  fetchNews: () => void;
  logout: () => void;
  newsArticles: any;
  auth: any;
  profile: any;
}

class HomePage extends Component<IProps, {}> {
  componentDidMount() {
    this.props.fetchNews();
    console.log("HEY: ", this.props);
  }

  private handleLogout() {
    this.props.logout();
  }

  render() {
    const { newsArticles, auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <>
        <NavBar logout={() => this.handleLogout()} />
        <Header>
          <Typography variant="h4">
            Hi.. (TODO: getting your name from database soon..)
          </Typography>
          <Typography variant="h6" component="h2">
            Welcome to Multiply Blog
          </Typography>
        </Header>
        <NewsContainer>
          {!!newsArticles.length && <NewsCard newsArticles={newsArticles} />}
        </NewsContainer>
      </>
    );
  }
}

const Header = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #666666;
`;

const NewsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const mapStateToProps = (state: any) => {
  const { auth, profile } = state.firebase;
  return {
    newsArticles: state.newsFeed.newsArticles,
    auth,
    profile
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(processLogout()),
    fetchNews: () => dispatch(processFetchNews())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
