import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

export const useCreateJobs = ({ onSuccess }: any) => {
  const token = Cookies.get("token")
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          title: data.title,
          job_description: data.job_description,
          job_qualification: data.job_qualification,
          job_type: data.job_type,
          job_tenure: data.job_tenure,
          job_status: data.job_status == false ? 0 : 1,
          company_name: data.company_name,
          company_image_url: data.company_image_url,
          company_city: data.company_city,
          salary_min: parseInt(data.salary_min),
          salary_max: parseInt(data.salary_max),
        })
      })
      const datas = await response.json()
      return datas
    },
    onSuccess,
  });
};

export const useEditJobs = ({ onSuccess }: any, id: number) => {
  const token = Cookies.get("token")
  return useMutation({
    mutationFn: async (data: any) => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/job-vacancy/${id}`, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(data)
        })
        if (res.ok) {
          console.log('berhasil mengubah data')
        }

      } catch (err) {
        console.error('Error in server: ', err);
        throw new Error('Failed Submit data: ')
      }
      // const datas = await response.json()
      // return datas
    },
    onSuccess,
  });
};


