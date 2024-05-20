import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import useGetDataNotice from "@/hook/useGetDataNotice";

const NotificationsPage = () => {
  const { anniversary, vacation, birthDay } = useGetDataNotice();

  console.log({ anniversary, vacation, birthDay });

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <h2 className="text-2xl font-semibold">Notifications</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Birthday */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg italic">Birthday</CardTitle>
              <CardDescription className="!mt-0">You have {birthDay.length} messages.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              {birthDay.map((item) => {
                const fullName = `${item.CURRENT_LAST_NAME} ${item.CURRENT_MIDDLE_NAME} ${item.CURRENT_FIRST_NAME}`;
                return (
                  <div key={item.PERSONAL_ID} className="bg-green-50 px-5 py-2 rounded">
                    <p className="font-semibold">{fullName}</p>
                    <p>Gender: {item.CURRENT_GENDER}</p>
                    <p>Birthday: {item.BIRTH_DATE}</p>
                  </div>
                )
              })} 
            </CardContent>
          </Card>
          {/* Anniversary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg italic">Hiring Anniversary</CardTitle>
              <CardDescription className="!mt-0">You have {anniversary.length} messages.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              {anniversary.map((item) => {
                const fullName = `${item.CURRENT_LAST_NAME} ${item.CURRENT_MIDDLE_NAME} ${item.CURRENT_FIRST_NAME}`;
                return (
                  <div key={item.PERSONAL_ID} className="bg-gray-50 px-5 py-2 rounded">
                    <p className="font-semibold">{fullName}</p>
                    <p>Gender: {item.CURRENT_GENDER}</p>
                    <p>Hire Date: {item["EMPLOYMENT.HIRE_DATE_FOR_WORKING"]}</p>
                  </div>
                )
              })} 
            </CardContent>
          </Card>
          {/* excess vacations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg italic">Excess Vacation</CardTitle>
              <CardDescription className="!mt-0">You have {vacation.length} messages.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              {vacation.map((item) => {
                const fullName = `${item.lastName} ${item.firstName}`;
                return (
                  <div key={item.PERSONAL_ID} className="bg-red-50 px-5 py-2 rounded">
                    <p className="font-semibold">{fullName}</p>
                    <p>Vacation Days: {item.vacationDays}</p>
                    <p>Total Vacation Days: {item.totalVacationDays}</p>
                  </div>
                )
              })} 
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
};

export default NotificationsPage;