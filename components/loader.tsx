import { Loader2 } from "lucide-react";

type Props = {
  color: string;
};

export const Loader = ({ color }: Props) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Loader2 className="animate-spin h-6 w-6" />
    </div>
  );
};
