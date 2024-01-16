import { UseFormRegister } from "react-hook-form";
import { EmployeeSchema } from "../../interfaces/employeeInterfaces";

export interface IEmployeeFormRegister {
  register: UseFormRegister<EmployeeSchema>;
}

const TrainingExperienceForm = ({ register }: IEmployeeFormRegister) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h3>Pengalaman Pelatihan</h3>
      <div className="flex flex-row gap-x-2">
        <div>
          <label htmlFor="trainingExperiences_training_name">
            Nama Pelatihan
          </label>
          <input
            id="trainingExperiences_training_name"
            {...register(`trainingExperiences.${0}.training_name`)}
          />
        </div>

        <div>
          <label htmlFor="trainingExperiences_training_year">Tahun</label>
          <input
            id="trainingExperiences_training_year"
            {...register(`trainingExperiences.${0}.training_year`)}
          />
        </div>
      </div>

      <div className="flex flex-row gap-x-2">
        <div>
          <label htmlFor="trainingExperiences_certificate">Sertifikat</label>
          <select
            id="trainingExperiences_certificate"
            {...register(`trainingExperiences.${0}.certificate`)}
          >
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TrainingExperienceForm;
