import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import useGetDataNotice from "@/hook/useGetDataNotice";

const NotificationsPage = () => {
  const { anniversary, vacation, birthDay } = useGetDataNotice();
  const numberOfNotice = anniversary.length + vacation.length + birthDay.length;

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <h2 className="text-2xl font-semibold">Notifications ({numberOfNotice})</h2>
        <div className="grid grid-cols-3 gap-4">
          <Tabs defaultValue="birthday" className="col-span-3" orientation="vertical">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="birthday">Birthday</TabsTrigger>
              <TabsTrigger value="anniversary">Hiring Anniversary</TabsTrigger>
              <TabsTrigger value="vacation">Excess Vacation</TabsTrigger>
            </TabsList>
            <TabsContent value="birthday">
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
            </TabsContent>
            <TabsContent value="anniversary">
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
            </TabsContent>
            <TabsContent value="vacation">
              {/* excess vacations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg italic">Excess Vacation</CardTitle>
                  <CardDescription className="!mt-0">You have {vacation.length} messages.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 text-sm">
                  {vacation.map((item, index) => {
                    const fullName = `${item.lastName} ${item.firstName}`;
                    return (
                      <div key={`${item.PERSONAL_ID}${index}`} className="bg-red-50 px-5 py-2 rounded">
                        <p className="font-semibold">{fullName}</p>
                        <p>Vacation Days: {item.vacationDays}</p>
                        <p>Total Vacation Days: {item.totalVacationDays}</p>
                      </div>
                    )
                  })} 
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ScrollArea>
  );
};

export default NotificationsPage;