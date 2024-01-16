import { useEffect } from "react";
import { useGetAllEmployees } from "../../../lib/swr/employeeSWR";

const Dashboard = () => {
  const { candidateEmployees } = useGetAllEmployees();

  useEffect(() => {
    console.log(candidateEmployees);
  }, [candidateEmployees])

  return (
    <div>
      <h1>Dashboard</h1>
      {candidateEmployees &&
        candidateEmployees.map((employee) => (
          <div key={employee.id}>
            <h2>{employee.name}</h2>
            <p>{employee.email}</p>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
