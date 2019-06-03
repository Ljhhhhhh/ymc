import React, { Component } from "react";
import { ThemeProvider } from "styled-px2rem";

const theme = {
  primaryColor: "#7486FC"
};

const StyleProvider = WrappedComponent =>
  class WrapperComponent extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <WrappedComponent {...this.props} />
        </ThemeProvider>
      );
    }
  };

export default StyleProvider;
