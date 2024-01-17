import * as yup from "yup";
import { EmployeeSchema } from "../../../interfaces/employeeInterfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createEmployee, updateEmployee } from "../../../lib/axios/employeeAxios";
import { useEffect } from "react";
import TrainingExperienceForm from "../../../components/Form/TrainingExperienceForm";
import WorkExperienceForm from "../../../components/Form/WorkExperienceForm";
import EducationForm from "../../../components/Form/EducationForm";
import { useGetEmployeeById } from "../../../lib/swr/employeeSWR";

const FormBiodata = () => {
  const user = localStorage.getItem("user");

  const { candidateEmployee } = useGetEmployeeById(JSON.parse(user!).id);

  // puanjaaaaaaaaaaaaaaaaaaaaaaaang
  const employeeSchema: yup.ObjectSchema<EmployeeSchema> = yup.object().shape({
    position: yup.string().required("Posisi harus diisi"),
    name: yup.string().required("Nama harus diisi"),
    identity_number: yup.string().required("Nomor KTP harus diisi"),
    place_and_date_of_birth: yup
      .string()
      .required("Tempat dan tanggal lahir harus diisi"),
    gender: yup.string().required("Jenis kelamin harus diisi"),
    religion: yup.string().required("Agama harus diisi"),
    blood_type: yup.string().required("Golongan darah harus diisi"),
    marital_status: yup.string().required("Status pernikahan harus diisi"),
    address_in_identity_card: yup.string().required("Alamat KTP harus diisi"),
    address: yup.string().required("Alamat harus diisi"),
    email: yup.string().required("Email harus diisi"),
    phone_number: yup.string().required("Nomor telepon harus diisi"),
    emergency_contact_name: yup
      .string()
      .required("Nama kontak darurat harus diisi"),
    skills: yup.string().required("Kemampuan harus diisi"),
    ready_to_be_placed: yup.string().required("Kesiapan harus diisi"),
    salary_expectation: yup.number().required("Ekspektasi gaji harus diisi"),
    workExperiences: yup
      .array()
      .of(
        yup.object().shape({
          company_name: yup.string(),
          position: yup.string(),
          work_year: yup.string(),
          salary: yup
            .number()
            .transform((value) => (Number.isNaN(value) ? null : value)),
        }),
      )
      .optional()
      .nullable(),
    trainingExperiences: yup
      .array()
      .of(
        yup.object().shape({
          training_name: yup.string(),
          training_year: yup.string(),
          certificate: yup.string(),
        }),
      )
      .optional()
      .nullable(),
    lastEducations: yup
      .array()
      .of(
        yup.object().shape({
          level: yup.string().required("Jenjang pendidikan harus diisi"),
          institution: yup.string().required("Nama institusi harus diisi"),
          major: yup.string().required("Jurusan harus diisi"),
          graduation_year: yup.string().required("Tahun harus diisi"),
          grade: yup.string().required("IPK harus diisi"),
        }),
      )
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(employeeSchema),
    defaultValues: candidateEmployee,
  });

  const handleOnSubmit = async (data: EmployeeSchema) => {
    if (!user) {
      return;
    }

    const payload = {
      employee: data,
      userId: JSON.parse(user!).id,
    };

    if (candidateEmployee) {
      await updateEmployee({employee: payload.employee, id: candidateEmployee.id })
        .then((res) => {
          alert(res.message);
        })
        .catch((err) => alert(err.message));
      return;
    }

    await createEmployee(payload)
      .then((res) => {
        alert(res.message);
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    if (candidateEmployee) {
      reset(candidateEmployee);
    }
  }, [candidateEmployee]);

  return (
    <main className="mx-auto flex min-h-screen w-[600px]">
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="my-10 flex h-fit w-full flex-col rounded-2xl border-gray-200 bg-white px-4 pb-8 pt-5 shadow-md sm:border sm:px-10 sm:pt-8"
      >
        <h1 className="text-center text-2xl font-semibold">Tambah Biodata</h1>
        <div className="mt-5 flex flex-col gap-y-2">
          <label htmlFor="position">Posisi yang dilamar</label>
          <input
            type="text"
            id="position"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("position")}
          />
          <span className="text-xs text-red-500">
            {errors.position?.message}
          </span>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="name">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("name")}
          />
          <span className="text-xs text-red-500">{errors.name?.message}</span>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="identity_number">Nomor KTP</label>
          <input
            type="text"
            id="identity_number"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("identity_number")}
          />
          <span className="text-xs text-red-500">
            {errors.identity_number?.message}
          </span>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="place_and_date_of_birth">
            Tempat dan Tanggal Lahir
          </label>
          <input
            type="text"
            id="place_and_date_of_birth"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("place_and_date_of_birth")}
          />
          <span className="text-xs text-red-500">
            {errors.place_and_date_of_birth?.message}
          </span>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="gender">Jenis Kelamin</label>
          <select id="gender" {...register("gender")}>
            <option value="laki-laki">Laki-laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="religion">Agama</label>
          <select id="religion" {...register("religion")}>
            <option value="islam">Islam</option>
            <option value="kristen">Kristen</option>
            <option value="katolik">Katolik</option>
            <option value="hindu">Hindu</option>
            <option value="budha">Budha</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="blood_type">Golongan Darah</label>
          <select id="blood_type" {...register("blood_type")}>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="ab">AB</option>
            <option value="o">O</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="marital_status">Status Pernikahan</label>
          <select id="marital_status" {...register("marital_status")}>
            <option value="belum menikah">Belum Menikah</option>
            <option value="menikah">Menikah</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="address_in_identity_card">
            Alamat KTP (Sesuai KTP)
          </label>
          <textarea
            id="address_in_identity_card"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("address_in_identity_card")}
          />
          <span className="text-xs text-red-500">
            {errors.address_in_identity_card?.message}
          </span>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="address">Alamat</label>
          <textarea
            id="address"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("address")}
          />
          <span className="text-xs text-red-500">
            {errors.address?.message}
          </span>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("email")}
          />
          <span className="text-xs text-red-500">{errors.email?.message}</span>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="phone_number">Nomor Telepon</label>
          <input
            type="text"
            id="phone_number"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("phone_number")}
          />
          <span className="text-xs text-red-500">
            {errors.phone_number?.message}
          </span>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="emergency_contact_name">Kontak orang terdekat</label>
          <input
            type="text"
            id="emergency_contact_name"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("emergency_contact_name")}
          />
          <span className="text-xs text-red-500">
            {errors.emergency_contact_name?.message}
          </span>
        </div>

        <EducationForm register={register} />
        <WorkExperienceForm register={register} />
        <TrainingExperienceForm register={register} />

        <div className="flex flex-col gap-y-2">
          <label htmlFor="skills">Kemampuan</label>
          <textarea
            id="skills"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("skills")}
          />
          <span className="text-xs text-red-500">{errors.skills?.message}</span>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="ready_to_be_placed">Siap ditempatkan</label>
          <select id="ready_to_be_placed" {...register("ready_to_be_placed")}>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="salary_expectation">Ekspektasi Gaji</label>
          <input
            type="number"
            id="salary_expectation"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            min={0}
            {...register("salary_expectation")}
          />
          <span className="text-xs text-red-500">
            {errors.salary_expectation?.message}
          </span>
        </div>

        <button type="submit">
          <span>Submit</span>
        </button>
      </form>
    </main>
  );
};

export default FormBiodata;
