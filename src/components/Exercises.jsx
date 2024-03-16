import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useGYM } from "../hooks/ContextProvider";
import ExerciseCard from "./ExerciseCard";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

function Exercises() {
  const { exercises, bodyPart, setExercises } = useGYM();
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1500, behavior: "smooth" });
  };
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  useEffect(() => {
    const fetchDataAndSetExercises = async () => {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=5000"
      );
      let searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(bodyPart) ||
          exercise.target.toLowerCase().includes(bodyPart) ||
          exercise.equipment.toLowerCase().includes(bodyPart) ||
          exercise.bodyPart.toLowerCase().includes(bodyPart)
      );
      if (bodyPart.toLowerCase() === "all") searchedExercises = exercisesData;
      setExercises(searchedExercises);
    };

    fetchDataAndSetExercises();
  }, [bodyPart]);

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px" },
        mt: "50px",
        p: "20px",
      }}
    >
      <Typography variant="h3" mb={6}>
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          ></Pagination>
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
