import { z } from "zod"

export const schemaResponseDataJobs = z.array(
    z.union([
      z.object({
        id: z.number(),
        created_at: z.string(),
        updated_at: z.string(),
        title: z.string(),
        job_description: z.string(),
        job_qualification: z.string(),
        job_type: z.string(),
        job_tenure: z.string(),
        job_status: z.number(),
        company_name: z.string(),
        company_image_url: z.string(),
        company_city: z.string(),
        salary_min: z.number(),
        salary_max: z.number()
      }),
      z.object({
        id: z.number(),
        created_at: z.string(),
        updated_at: z.string(),
        title: z.string(),
        job_description: z.string(),
        job_qualification: z.string(),
        job_type: z.string(),
        job_tenure: z.string(),
        job_status: z.null(),
        company_name: z.string(),
        company_image_url: z.string(),
        company_city: z.string(),
        salary_min: z.number(),
        salary_max: z.number()
      })
    ])
  )
  

export const schemaDataJobs = z.object({
    current_page: z.number(),
    data: z.array(
        z.union([
            z.object({
                id: z.number(),
                created_at: z.string(),
                updated_at: z.string(),
                title: z.string(),
                job_description: z.string(),
                job_qualification: z.string(),
                job_type: z.string(),
                job_tenure: z.string(),
                job_status: z.number(),
                company_name: z.string(),
                company_image_url: z.string(),
                company_city: z.string(),
                salary_min: z.number(),
                salary_max: z.number()
            }),
            z.object({
                id: z.number(),
                created_at: z.string(),
                updated_at: z.string(),
                title: z.string(),
                job_description: z.string(),
                job_qualification: z.string(),
                job_type: z.string(),
                job_tenure: z.string(),
                job_status: z.null(),
                company_name: z.string(),
                company_image_url: z.string(),
                company_city: z.string(),
                salary_min: z.number(),
                salary_max: z.number()
            })
        ])
    ),
    first_page_url: z.string(),
    from: z.number(),
    last_page: z.number(),
    last_page_url: z.string(),
    next_page_url: z.null(),
    path: z.string(),
    per_page: z.number(),
    prev_page_url: z.null(),
    to: z.number(),
    total: z.number()
})


export const schemaDataLogin = z.object({
    user: z.object({
        id: z.number(),
        name: z.string(),
        email: z.string(),
        image_url: z.string(),
        email_verified_at: z.null(),
        created_at: z.string(),
        updated_at: z.string()
    }),
    token: z.string()
})

export const validationSchema = z
    .object({
        title: z.string().min(1, { message: "title is required" }),
        job_description: z
            .string()
            .min(1, { message: "description is required" }),
        job_qualification: z
            .string()
            .min(1, { message: "qualification is required" }),
        job_type: z.string().min(1, { message: "type is required" }),
        job_tenure: z.string().min(1, { message: "tenure is required" }),
        job_status: z.boolean(),
        company_name: z.string().min(1, { message: "company name is required" }),
        company_image_url: z
            .string()
            .min(1, { message: "company image is required" }),
        company_city: z.string().min(1, { message: "location is required" }),
        salary_min: z.string().min(1, { message: "salary minimal is required" }),
        salary_max: z.string().min(1, { message: "salary maksimal is required" }),
    })
