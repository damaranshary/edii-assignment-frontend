import useSWR from "swr";
import { getAllEmployees } from "../axios/employeeAxios";

export const useGetAllEmployees = () => {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URL}/employees`,
    getAllEmployees
  );

  return {
    candidateEmployees: data,
    isLoading,
    isError: error,
  };
};
