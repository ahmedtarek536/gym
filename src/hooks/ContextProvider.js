import { createContext, useContext, useState } from "react";

const ContextGYM = createContext();
function ContextProvider({ children }) {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentMuscleExercises, setEquipmentMuscleExercises] = useState([]);

  return (
    <ContextGYM.Provider
      value={{
        exercises,
        setExercises,
        bodyPart,
        setBodyPart,
        exerciseDetail,
        setExerciseDetail,
        exerciseVideos,
        setExerciseVideos,
        targetMuscleExercises,
        setTargetMuscleExercises,
        equipmentMuscleExercises,
        setEquipmentMuscleExercises,
      }}
    >
      {children}
    </ContextGYM.Provider>
  );
}
function useGYM() {
  return useContext(ContextGYM);
}
export { ContextProvider, useGYM };
