import axios from "axios";
import {
  CandidateEmployee,
  CandidateEmployees,
  EmployeeSchema,
} from "../../interfaces/employeeInterfaces";

interface AddEmployee {
  employee: EmployeeSchema;
  userId: string;
}

interface UpdateEmployee {
  employee: EmployeeSchema;
  id: number;
}

export const getAllEmployees = async (
  url: string,
): Promise<CandidateEmployees> => {
  const response = await axios.get(url);

  return response.data;
};

export const getEmployeeById = async (
  url: string,
): Promise<CandidateEmployee> => {
  const response = await axios.get(url);

  return response.data;
};

export const createEmployee = async ({ employee, userId }: AddEmployee) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/employees`,
    {
      employee,
      userId,
    },
  );

  return response.data;
};

export const updateEmployee = async ({ employee, id }: UpdateEmployee) => {
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/employees/${id}`,
    {
      employee,
    },
  );

  return response.data;
};
