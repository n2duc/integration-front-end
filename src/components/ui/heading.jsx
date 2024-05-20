export const Heading = ({ title, description, className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-bold tracking-tight text-primary sm:text-3xl">
        {title}
      </h2>
      <p className="text-sm text-muted-foreground hidden md:block">{description}</p>
    </div>
  );
};