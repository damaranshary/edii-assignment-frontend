import { useGetAllEmployees } from "../../../lib/swr/employeeSWR";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../../lib/axios/employeeAxios";

const Dashboard = () => {
  const { candidateEmployees, mutate } = useGetAllEmployees();

  const handleDelete = async (id: number) => {
    await deleteEmployee(id)
      .then((res) => alert(res.message))
      .finally(() => mutate());
  };

  return (
    <main className="mx-auto my-10 w-[800px] rounded-xl border border-gray-200 p-10 ">
      <h1 className="mb-5 text-2xl font-bold">Kandidat Karyawan</h1>
      <table className="table-auto border-collapse  rounded-xl border border-slate-500">
        <thead>
          <tr className="p-2">
            <th className="border border-slate-600 px-5">ID</th>
            <th className="border border-slate-600 px-5">Nama</th>
            <th className="border border-slate-600 px-5">
              Tempat dan Tanggal Lahir
            </th>
            <th className="border border-slate-600 px-5">Posisi</th>
            <th className="border border-slate-600 px-5">Aksi</th>
          </tr>
        </thead>
        {candidateEmployees &&
          candidateEmployees.map((employee) => (
            <tbody key={employee.id}>
              <tr>
                <td className="border border-slate-600 px-5">{employee.id}</td>
                <td className="border border-slate-600 px-5">
                  {employee.name}
                </td>
                <td className="border border-slate-600 px-5">
                  {employee.place_and_date_of_birth}
                </td>
                <td className="border border-slate-600 px-5">
                  {employee.position}
                </td>
                <td className="border border-slate-600 p-5">
                  <div className="flex flex-row gap-x-3">
                    <button className="rounded-xl bg-primary px-3 text-white">
                      <Link to={`/biodata/${employee.id}`}>Edit</Link>
                    </button>

                    <button
                      className="rounded-xl bg-red-500 px-3 text-white"
                      onClick={() => handleDelete(employee.id)}
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </main>
  );
};

export default Dashboard;
