import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";
function Footer() {
  return (
    <Box bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="40px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="40px">
          Made with ❤️ by Roney
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
