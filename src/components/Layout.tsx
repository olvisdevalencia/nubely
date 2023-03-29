import React from "react";
import Head from "next/head";
import { GlobalStyle } from "../styles/globalStyles";
import { theme } from "../styles/theme";
import styled, { ThemeProvider } from "styled-components";

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children, title = "Random Users" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>{children}</Container>
      </ThemeProvider>
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export default Layout;
