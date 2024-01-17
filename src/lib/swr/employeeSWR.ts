import useSWR from "swr";
import { getAllEmployees, getEmployeeById } from "../axios/employeeAxios";

export const useGetAllEmployees = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `${import.meta.env.VITE_API_URL}/employees`,
    getAllEmployees,
  );

  return {
    candidateEmployees: data,
    isLoading,
    isError: error,
    mutate,
  };
};

export const useGetEmployeeByUserId = (id: string) => {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URL}/employees/users/${id}`,
    getEmployeeById,
  );

  return {
    candidateEmployee: data,
    isLoading,
    isError: error,
  };
};

export const useGetEmployeeById = (id: string | null) => {
  if (!id) {
    return {
      candidateEmployee: null,
      isLoading: false,
      isError: null,
    };
  }

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
