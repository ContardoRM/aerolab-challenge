import React from "react";
import {Stack, Image, Text, Container} from "@chakra-ui/react";

import coin from "../../assets/icons/coin.svg";
import logo from "../../assets/logo.svg";
import {usePoints} from "../../user/hooks";

const Navbar: React.FC = () => {
  const [points, onRedeem] = usePoints();

  function handleRedeem() {
    onRedeem(1000);
  }

  return (
    <Container maxWidth="6xl">
      <Stack
        alignItems="center"
        as="nav"
        direction="row"
        justifyContent="space-between"
        paddingY={3}
      >
        <Image height={8} src={logo} width={8} />
        <Stack alignItems="center" color="gray.500" direction="row" spacing={3}>
          <Text fontSize="lg" fontWeight="500">
            John Kite
          </Text>
          <Stack
            alignItems="center"
            backgroundColor="gray.100"
            borderRadius={9999}
            cursor="pointer"
            direction="row"
            paddingX={3}
            paddingY={2}
            onClick={handleRedeem}
          >
            <Text fontWeight="500">{points}</Text>
            <Image height={6} src={coin} width={6} />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
