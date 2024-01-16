import axios from "axios";
import {
  CandidateEmployees,
  EmployeeSchema,
} from "../../interfaces/employeeInterfaces";

interface AddEmployee {
  employee: EmployeeSchema;
  userId: string;
}

export const getAllEmployees = async (
  url: string
): Promise<CandidateEmployees> => {
  const response = await axios.get(url);

  return response.data;
};

export const createEmployee = async ({ employee, userId }: AddEmployee) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/employees`,
    {
      employee,
      userId,
    }
  );

  return response.data;
};
