import { Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button';
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
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { employeeSchema } from '@/constants/validation';
import useGetDataSelect from '@/hook/useGetDataSelect';

const EmployeeCreateForm = ({ modalClose }) => {
  const { toast } = useToast();
  // const [updateUI, setUpdateUI] = useState(false);

  const { listPayrates, listBenefitPlans } = useGetDataSelect();

  const form = useForm({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      jobHistory: [{ department: "", jobTitle: "", startDate: "", endDate: "", location: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "jobHistory",
  });

  const onSubmit = async (values) => {
    const filteredJobHistory = values.jobHistory.filter(
      (entry) => entry.department !== "" || entry.jobTitle !== "" || entry.startDate !== "" || entry.endDate !== "" || entry.location !== ""
    );
    const newData = {...values, jobHistory: filteredJobHistory};
    console.log("Data: ", newData);
    try {
      await axios.post("http://localhost:8080/api/employees", newData);
      form.reset();
      modalClose();
      toast({
        title: "Create Employee Success",
        description: "Employee has been created successfully!",
      })
    } catch (error) {
      toast({
        title: "Create Employee Failed",
        description: `${error.message}`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="px-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-1">
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select benefits plan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {listBenefitPlans.map((benefitPlan) => (
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payrate" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {listPayrates.map((payrate) => (
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
                {/* <FormField
                  control={form.control}
                  name={`jobHistory.${index}.id`}
                  render={({ field }) => (
                    <FormItem>
                      {index === 0 && <FormLabel>ID</FormLabel>}
                      <FormControl>
                        <Input placeholder="ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
                <FormField
                  control={form.control}
                  name={`jobHistory.${index}.department`}
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
                  name={`jobHistory.${index}.jobTitle`}
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
                  name={`jobHistory.${index}.startDate`}
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
                  name={`jobHistory.${index}.endDate`}
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
                  name={`jobHistory.${index}.location`}
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
                {fields.length > 1 && index !== fields.length - 1 && (
                  <Button variant="destructive" size="icon" type="button" onClick={() => remove(index)}>
                    <X size={16} />
                  </Button>
                )}
                {index === fields.length - 1 && (
                  <Button variant="outline" size="icon" type="button" onClick={() => append({ deparment: "", jobTitle: "", startDate: "", endDate: "", location: "" })}>
                    <Plus size={16} />
                  </Button>
                )}
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
              Create Employee
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default EmployeeCreateForm;