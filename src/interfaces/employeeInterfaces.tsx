export type CandidateEmployees = CandidateEmployee[];

export interface CandidateEmployee {
  id: number;
  user_id: number;
  position: string;
  name: string;
  identity_number: string;
  place_and_date_of_birth: string;
  gender: string;
  religion: string;
  blood_type: string;
  marital_status: string;
  address_in_identity_card: string;
  address: string;
  email: string;
  phone_number: string;
  emergency_contact_name: string;
  skills: string;
  ready_to_be_placed: string;
  salary_expectation: number;
  created_at: string;
  updated_at: string;
  workExperiences: WorkExperience[];
  trainingExperiences: TrainingExperience[];
  lastEducations: LastEducation[];
}

export interface EmployeeSchema {
  position: string;
  name: string;
  identity_number: string;
  place_and_date_of_birth: string;
  gender: string;
  religion: string;
  blood_type: string;
  marital_status: string;
  address_in_identity_card: string;
  address: string;
  email: string;
  phone_number: string;
  emergency_contact_name: string;
  skills: string;
  ready_to_be_placed: string;
  salary_expectation: number;
  workExperiences?: WorkExperienceSchema[] | undefined | null | [];
  trainingExperiences?: TrainingExperienceSchema[] | undefined | null | [];
  lastEducations: LastEducationSchema[];
}

export interface WorkExperienceSchema {
  company_name?: string;
  position?: string;
  work_year?: string;
  salary?: number;
}

export interface WorkExperience extends WorkExperienceSchema {
  id: number;
  candidate_employee_id: number;
}

export interface TrainingExperienceSchema {
  training_name?: string;
  training_year?: string;
  certificate?: string;
}

export interface TrainingExperience extends TrainingExperienceSchema {
  id: number;
  candidate_employee_id: number;
}

export interface LastEducationSchema {
  level: string;
  institution: string;
  major: string;
  graduation_year: string;
  grade: string;
}

export interface LastEducation extends LastEducationSchema {
  id: number;
  candidate_employee_id: number;
}
