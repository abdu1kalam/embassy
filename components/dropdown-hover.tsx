import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type Props = {
  trigger: string;
  description: string;
};

export const DropDownHover = ({ trigger, description }: Props) => {
  return (
    <>
      <HoverCard>
        <HoverCardTrigger>{trigger}</HoverCardTrigger>
        <HoverCardContent>{description}</HoverCardContent>
      </HoverCard>
    </>
  );
};
