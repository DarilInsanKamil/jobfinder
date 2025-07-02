export type DataRegister = {
  email: string;
  name: string
  image_url: string
  password: string;
};

export type DataLogin = {
  email: string;
  password: string;
};

export interface Root {
  success: boolean
  user: User;
  token: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  image_url: string;
  email_verified_at: any;
  created_at: string;
  updated_at: string;
}
export interface RootResponseJob {
  current_page: number
  data: ResponseJob[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  next_page_url: any
  path: string
  per_page: number
  prev_page_url: any
  to: number
  total: number
}

export type ResponseJob = {
  _id: number
  created_at: string
  updated_at: string
  title: string
  job_description: string
  job_qualification: string
  job_type: string
  job_tenure: string
  job_status?: number | null | undefined;
  company_name: string
  company_image_url: string
  company_city: string
  salary_min: number
  salary_max: number
}

export interface CreateJob {
  title: string
  job_description: string
  job_qualification: string
  job_type: string
  job_tenure: string
  job_status: number
  company_name: string
  company_image_url: string
  company_city: string
  salary_min: number
  salary_max: number
}

export type CardData = {
  _id: number | string;
  title: string;
  salary_min: number;
  salary_max: number;
  company_name: string;
  company_image_url: string;
  job_tenure: string;
  job_type: string;
  company_city: string
};

export type UploadJob = {
  title: string,
  job_description: string,
  job_qualification: string,
  job_type: string,
  job_tenure: string,
  job_status: number,
  company_city: string,
  company_name: string,
  company_image_url: string,
  salary_min: string,
  salary_max: string,
}
export type EditUploadJob = {
  id: number,
  title: string,
  job_description: string,
  job_qualification: string,
  job_type: string,
  job_tenure: string,
  job_status: number,
  company_city: string,
  company_name: string,
  company_image_url: string,
  salary_min: string,
  salary_max: string,
}