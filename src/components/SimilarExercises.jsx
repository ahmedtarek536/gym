import React from "react";
import { useGYM } from "../hooks/ContextProvider";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = () => {
  const { targetMuscleExercises, equipmentMuscleExercises } = useGYM();
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ p: "2", position: "relative", height: "100%" }}
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar
            key={Math.random()}
            data={targetMuscleExercises}
            isBodyParts={false}
          />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5} mt={10}>
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ p: "2", position: "relative", height: "100%" }}
      >
        {equipmentMuscleExercises.length ? (
          <HorizontalScrollbar
            key={Math.random()}
            data={equipmentMuscleExercises}
            isBodyParts={false}
          />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
