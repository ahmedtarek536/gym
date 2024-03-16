import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ExerciseCard({ exercise }) {
  const navigate = useNavigate();
  return (
    <Box
      className="exercise-card"
      onClick={() => navigate(`/exercise/${exercise.id}`)}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            "&:hover": {
              background: "#ffa9a9",
            },
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            textDecoration: "none",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            "&:hover": {
              background: "#fcc757",
            },
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Box>
  );
}

export default ExerciseCard;
