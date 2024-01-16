import axios from "axios";
import { CandidateEmployees } from "../../interfaces/employeeInterfaces";

export const getAllEmployees = async (
  url: string
): Promise<CandidateEmployees> => {
  const response = await axios.get(url);

  return response.data;
};
