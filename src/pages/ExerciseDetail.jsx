import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { useGYM } from "../hooks/ContextProvider";
import { fetchData, youtubeOptions } from "../utils/fetchData";

function ExerciseDetail() {
  const { id } = useParams();
  const {
    exerciseDetail,
    setExerciseDetail,
    setExerciseVideos,
    setTargetMuscleExercises,
    setEquipmentMuscleExercises,
  } = useGYM();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`
      );

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`
      );
      const equipmentMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`
      );

      setExerciseDetail(exerciseDetailData);
      setExerciseVideos(exerciseVideosData.contents);
      setTargetMuscleExercises(targetMuscleExercisesData);
      setEquipmentMuscleExercises(equipmentMuscleExercisesData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail />
      <ExerciseVideos name={exerciseDetail?.name} />
      <SimilarExercises />
    </Box>
  );
}

export default ExerciseDetail;
