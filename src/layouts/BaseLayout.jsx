import React from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container className="mt-5 mb-5">{children}</Container>
    </>
  );
};

export default BaseLayout;
