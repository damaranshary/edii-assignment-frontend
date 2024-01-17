import useSWR from "swr";
import { getAllEmployees, getEmployeeById } from "../axios/employeeAxios";

export const useGetAllEmployees = () => {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URL}/employees`,
    getAllEmployees,
  );

  return {
    candidateEmployees: data,
    isLoading,
    isError: error,
  };
};

export const useGetEmployeeById = (id: string) => {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URL}/employees/${id}`,
    getEmployeeById,
  );

  return {
    candidateEmployee: data,
    isLoading,
    isError: error,
  };
};
