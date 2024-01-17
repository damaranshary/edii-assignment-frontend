import { IEmployeeFormRegister } from "./TrainingExperienceForm";

const EducationForm = ({ register }: IEmployeeFormRegister) => {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <h3 className="mt-4 text-xl font-semibold">Pendidikan Terakhir</h3>
      <div className="flex flex-row gap-x-2">
        <div>
          <label htmlFor="lastEducations_level">Jenjang</label>
          <input
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            id="lastEducations_level"
            {...register(`lastEducations.${0}.level`)}
          />
        </div>

        <div>
          <label htmlFor="lastEducations_graduation_year">Tahun Lulus</label>
          <input
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            id="lastEducations_graduation_year"
            {...register(`lastEducations.${0}.graduation_year`)}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="lastEducations_institution">Institusi</label>
        <input
          className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
          id="lastEducations_institution"
          {...register(`lastEducations.${0}.institution`)}
        />
      </div>

      <div className="flex flex-row gap-x-2">
        <div>
          <label htmlFor="lastEducations_major">Jurusan</label>
          <input
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            id="lastEducations_major"
            {...register(`lastEducations.${0}.major`)}
          />
        </div>
        <div>
          <label htmlFor="lastEducations_grade">IPK</label>
          <input
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            id="lastEducations_grade"
            {...register(`lastEducations.${0}.grade`)}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
