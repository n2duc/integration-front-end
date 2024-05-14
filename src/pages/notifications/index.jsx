import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import useGetDataNotice from "@/hook/useGetDataNotice";

const NotificationsPage = () => {
  const { anniversary, vacation, birthDay } = useGetDataNotice();

  console.log({ anniversary, vacation, birthDay });

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <h2>Notifications</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hiring Anniversary</CardTitle>
              <CardDescription className="!mt-0">You have {anniversary.length} messages.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {anniversary.map((item) => (
                <div key={item.PERSONAL_ID} className="bg-gray-50 px-2 py-3 rounded">
                  <span>{item.name}</span>
                  <span>{item.date}</span>
                </div>
              ))}              
            </CardContent>
            <CardFooter>
              <Button>View all</Button>
            </CardFooter>
          </Card>
          <div className="bg-white p-4 rounded-md border border-gray-200 h-[50vh]"></div>
          <div className="bg-white p-4 rounded-md border border-gray-200 h-[50vh]"></div>
          <div className="bg-white p-4 rounded-md border border-gray-200 h-[50vh]"></div>
          <div className="bg-white p-4 rounded-md border border-gray-200 h-[50vh]"></div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default NotificationsPage;