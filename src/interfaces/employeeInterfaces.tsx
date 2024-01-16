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
  ready_to_be_placed: number;
  salary_expectation: number;
  created_at: string;
  updated_at: string;
  workExperiences: WorkExperience[];
  trainingExperiences: TrainingExperience[];
  lastEducations: LastEducation[];
}

export interface WorkExperience {
  id: number;
  candidate_employee_id: number;
  company_name: string;
  position: string;
  work_year: string;
  salary: number;
}

export interface TrainingExperience {
  id: number;
  candidate_employee_id: number;
  training_name: string;
  certificate: number;
  training_year: string;
}

export interface LastEducation {
  id: number;
  candidate_employee_id: number;
  level: string;
  institution: string;
  major: string;
  graduation_year: string;
  grade: string;
}
