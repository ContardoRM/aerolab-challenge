import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from "@chakra-ui/react";

import Layout from "./app/layout";
import HomeScreen from "./app/screens/Home";
import {Provider as UserProvider} from "./user/context";
import {Provider as ProductProvider} from "./product/context";
import theme from "./theme";

import "./theme.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserProvider>
        <ProductProvider>
          <Layout>
            <HomeScreen />
          </Layout>
        </ProductProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
