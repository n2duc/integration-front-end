import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Get the initials of the employee's name
const getInitials = (name) => {
  const initials = name.split(' ').map(word => word[0]).join('');
  return initials.length > 2 ? initials.slice(-2) : initials;
};

export default function TopRevenues({ data }) {
  const topFiveData = data.slice(0, 5);
  return (
    <div className="space-y-8">
      {topFiveData.map((personal) => {
        const fullName = `${personal.lastName} ${personal.firstName}`;
        return (
          <div className="flex items-center" key={personal.idEmployee}>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>{getInitials(fullName)}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{fullName}</p>
              <p className="text-sm text-muted-foreground">
                {personal?.info?.CURRENT_PERSONAL_EMAIL}
              </p>
            </div>
            <div className="ml-auto font-medium">+${personal.totalIncome}.00</div>
          </div>
        )
      })}
    </div>
  );
}