import { apiClient } from "@/utils/api";

export const fetchQuestions = async (setQData, setError) => {
  try {
    const data = await apiClient.getQuestions();
    setQData(data);
  } catch (error) {
    setError(error.message);
  }
};
