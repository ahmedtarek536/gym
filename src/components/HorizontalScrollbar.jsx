import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Logo from "../assets/icons/gym.png";
import { useGYM } from "../hooks/ContextProvider";
import ExerciseCard from "./ExerciseCard";
function HorizontalScrollbar({ data, isBodyParts = true }) {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        display: "flex",
        alignItems: "",
        height: "100%",
      }}
    >
      {data.map((item) =>
        isBodyParts ? (
          <Box key={item} m="0 20px">
            <BodyPart item={item} />
          </Box>
        ) : (
          <Box key={item.name} m="0 40px">
            <ExerciseCard exercise={item} />
          </Box>
        )
      )}
    </Box>
  );
}

function BodyPart({ item }) {
  const { bodyPart, setBodyPart } = useGYM();
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "200px",
        height: "200px",
        cursor: "pointer",
        gap: "30px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: "1800", left: "100", behavior: "smooth" });
      }}
    >
      <img src={Logo} className="body-part-icon" width={35} alt="logo-gym" />
      <Typography sx={{ textTransform: "uppercase" }}>{item}</Typography>
    </Stack>
  );
}

export default HorizontalScrollbar;
