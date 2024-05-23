import { employeeSchema } from '@/constants/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { useToast } from "@/components/ui/use-toast"
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useGetDataSelect from '@/hook/useGetDataSelect';
import getPersonalData from '@/hook/getPersonalData';
import { Plus, X } from 'lucide-react';

const EmployeeUpdateForm = ({ modalClose, employeeId }) => {
  const { toast } = useToast();
  const [employeeData, setEmployeeData] = useState({});

  const { listPayrates, listBenefitPlans } = useGetDataSelect();
  // Memoize the list of pay rates and benefit plans to prevent unnecessary re-renders
  const memoizedListPayrates = useMemo(() => listPayrates, [listPayrates]);
  const memoizedListBenefitPlans = useMemo(() => listBenefitPlans, [listBenefitPlans]);

  // Fetch employee data from API
  useEffect(() => {
    try {
      const fetchEmployee = async () => {
        const personalData = await getPersonalData(employeeId);
        setEmployeeData(personalData);
      }
      fetchEmployee();
    } catch (error) {
      console.log(error);
    }
  }, [employeeId]);

  const form = useForm({
    resolver: zodResolver(employeeSchema),
    defaultValues: employeeData,
    values: employeeData,
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "jobHistory",
  });

  // Update employee data
  const onUpdate = async (values) => {
    const filteredJobHistory = values.jobHistory.filter(
      (entry) => entry.DEPARTMENT !== "" || entry.JOB_TITLE !== "" || entry.FROM_DATE !== "" || entry.THRU_DATE !== "" || entry.LOCATION !== ""
    );
    const newData = {...values, jobHistory: filteredJobHistory};
    console.log("onUpdate: ", newData);
    try {
      await axios.put(`http://localhost:8080/api/employees/${employeeId}`, newData);
      modalClose();
      toast({
        title: "Update Employee",
        description: "Employee updated successfully",
      });
    } catch (error) {
      toast({
        title: "Update Employee Failed",
        description: `${error.response.data.error}`,
        variant: "destructive",
      });
    }
  }

  return (
    <div className="px-1 py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onUpdate)} className="space-y-4">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <FormField 
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your firstname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your lastname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="birthDay"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="date" placeholder="Pick your birthday" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="ssNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your ssNumber" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="driverLicense"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your driver license" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="address1"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your address1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="address2"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your address2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="number" placeholder="Enter your zipCode" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="ethnicity"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your ethnicity" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="employmentStatus"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employmentStatus" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="full-time">Full time</SelectItem>
                      <SelectItem value="part-time">Part time</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="shareholderStatus"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select shareholderStatus" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Shareholder</SelectItem>
                      <SelectItem value="0">Non shareholder</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="benefitPlanId"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value} >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select benefits plan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {memoizedListBenefitPlans.map((benefitPlan) => (
                        <SelectItem key={benefitPlan.BENEFIT_PLANS_ID} value={benefitPlan.BENEFIT_PLANS_ID.toString()}>
                          {benefitPlan.PLAN_NAME}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="payRateId"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payrate" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {memoizedListPayrates.map((payrate) => (
                        <SelectItem key={payrate.idPayRates} value={payrate.idPayRates.toString()}>
                          {payrate.Value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="maritalStatus"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your maritalStatus" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="vacationDays"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="number" placeholder="Enter your vacationDays" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="hireDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hire Date</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="Enter your hireDate" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="terminationDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Termination Date</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="Enter your terminationDate" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="bg-gray-50 rounded-sm">
            {fields.map((field, index) => (
              <div className="flex items-end gap-2 px-3 py-2" key={field.id}>
                <FormField
                  control={form.control}
                  name={`jobHistory.${index}.DEPARTMENT`}
                  render={({ field }) => (
                    <FormItem>
                      {index === 0 && <FormLabel>Department</FormLabel>}
                      <FormControl>
                        <Input placeholder="Department" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`jobHistory.${index}.JOB_TITLE`}
                  render={({ field }) => (
                    <FormItem>
                      {index === 0 && <FormLabel>Name</FormLabel>}
                      <FormControl>
                        <Input placeholder="Job Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField 
                  control={form.control}
                  name={`jobHistory.${index}.FROM_DATE`}
                  render={({ field }) => (
                    <FormItem>
                      {index === 0 && <FormLabel>Start date</FormLabel>}
                      <FormControl>
                        <Input type="date" placeholder="Pick your birthday" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField 
                  control={form.control}
                  name={`jobHistory.${index}.THRU_DATE`}
                  render={({ field }) => (
                    <FormItem>
                      {index === 0 && <FormLabel>End date</FormLabel>}
                      <FormControl>
                        <Input type="date" placeholder="Pick your birthday" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`jobHistory.${index}.LOCATION`}
                  render={({ field }) => (
                    <FormItem>
                      {index === 0 && <FormLabel>Location</FormLabel>}
                      <FormControl>
                        <Input placeholder="Location" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* {fields.length > 1 && index !== fields.length - 1 && (
                  <Button variant="destructive" size="icon" type="button" onClick={() => remove(index)}>
                    <X size={16} />
                  </Button>
                )}
                {index === fields.length - 1 && (
                  <Button variant="outline" size="icon" type="button" onClick={() => append({ DEPARTMENT: "", JOB_TITLE: "", FROM_DATE: "", THRU_DATE: "", LOCATION: "" })}>
                    <Plus size={16} />
                  </Button>
                )} */}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button
              type="button"
              variant="secondary"
              className="rounded-full "
              size="lg"
              onClick={modalClose}
            >
              Cancel
            </Button>
            <Button type="submit" className="rounded-full" size="lg">
              Update Employee
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default EmployeeUpdateForm;