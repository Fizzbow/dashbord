import { cn } from "@/lib/utils";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const RouterLink = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card className={`${cn("w-[350px] cursor-pointer")}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default RouterLink;
