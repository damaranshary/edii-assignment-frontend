import { UseFormRegister } from "react-hook-form";
import { EmployeeSchema } from "../../interfaces/employeeInterfaces";

export interface IEmployeeFormRegister {
  register: UseFormRegister<EmployeeSchema>;
}

const TrainingExperienceForm = ({ register }: IEmployeeFormRegister) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h3 className="mt-4 text-xl font-semibold">Pengalaman Pelatihan</h3>
      <div className="flex flex-row gap-x-2">
        <div>
          <label htmlFor="trainingExperiences_training_name">
            Nama Pelatihan
          </label>
          <input
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            id="trainingExperiences_training_name"
            {...register(`trainingExperiences.${0}.training_name`)}
          />
        </div>

        <div>
          <label htmlFor="trainingExperiences_training_year">Tahun</label>
          <input
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            id="trainingExperiences_training_year"
            {...register(`trainingExperiences.${0}.training_year`)}
          />
        </div>
      </div>

      <div className=" flex flex-row items-center gap-x-2 self-end">
        <label htmlFor="trainingExperiences_certificate">Sertifikat</label>
        <select
          className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
          id="trainingExperiences_certificate"
          {...register(`trainingExperiences.${0}.certificate`)}
        >
          <option value="ya">Ya</option>
          <option value="tidak">Tidak</option>
        </select>
      </div>
    </div>
  );
};

export default TrainingExperienceForm;
