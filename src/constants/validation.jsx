import { z } from 'zod';

const jobHistorySchema = z.object({
  // id: z.string(),
  department: z.string(),
  jobTitle: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  location: z.string(),
})

export const employeeSchema = z.object({
  firstname: z.string().min(1, { message: 'firstname is required' }),
  lastname: z.string().min(1, { message: 'lastname is required' }),
  gender: z.string({
    required_error: "Please select a gender"
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  birthDay: z.string().min(1, { message: 'birthDay is required' }),
  ssNumber: z.coerce.number().int().min(1, { message: 'ssNumber is required' }),
  driverLicense: z.string().min(1, { message: 'driverLicense is required' }),
  address1: z.string().min(1, { message: 'address1 is required' }),
  address2: z.string().min(1, { message: 'address2 is required' }),
  city: z.string().min(1, { message: 'city is required' }),
  zipCode: z.coerce.number().int().min(1, { message: 'zipCode is required' }),
  country: z.string().min(1, { message: 'country is required' }),
  ethnicity: z.string().min(1, { message: 'ethnicity is required' }),
  employmentStatus: z.string({
    required_error: "Please select a employmentStatus"
  }),
  payRateId: z.coerce.number().int().min(1, { message: 'payRateId is required' }),
  shareholderStatus: z.enum(["1", "0"], { message: 'shareholderStatus is required' }),
  benefitPlanId: z.coerce.number().int().min(1, { message: 'benefitPlanId is required' }),
  maritalStatus: z.string().min(1, { message: 'maritalStatus is required' }),
  vacationDays: z.coerce.number().int().min(1, { message: 'vacationDays is required' }),
  hireDate: z.string().min(1, { message: 'hireDate is required' }),
  terminationDate: z.string().min(1, { message: 'hireDate is required' }),
  jobHistory: z.array(jobHistorySchema),
});