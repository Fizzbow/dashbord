import { cn } from "@/lib/utils";
// import "./link.scss";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";

const RouterLink = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card className={`link ${cn("relative w-[350px] cursor-pointer")}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="absolute left-0 top-0 h-[100%] w-[100%] rounded-xl outline outline-slate-100 outline-[5px]"
      />
    </Card>
  );
};

export default RouterLink;
