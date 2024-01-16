import { IEmployeeFormRegister } from "./TrainingExperienceForm";

const WorkExperienceForm = ({ register }: IEmployeeFormRegister) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h3>Pengalaman Kerja</h3>
      <div className="flex flex-row gap-x-2">
        <div>
          <label htmlFor="workExperiences_company_name">Nama Perusahaan</label>
          <input
            id="workExperiences_company_name"
            {...register(`workExperiences.${0}.company_name`)}
          />
        </div>

        <div>
          <label htmlFor="workExperiences_work_year">Tahun</label>
          <input
            id="workExperiences_work_year"
            {...register(`workExperiences.${0}.work_year`)}
          />
        </div>
      </div>

      <div className="flex flex-row gap-x-2">
        <div>
          <label htmlFor="workExperiences_position">Posisi</label>
          <input
            id="workExperiences_position"
            {...register(`workExperiences.${0}.position`)}
          />
        </div>
        <div>
          <label htmlFor="workExperiences_salary">Gaji</label>
          <input
            id="workExperiences_salary"
            {...register(`workExperiences.${0}.salary`)}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceForm;
