import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SubmitFormButtonProps {
	text: string;
	isLoading?: boolean;
  }
  
  export function SubmitFormButton({ text, isLoading }: SubmitFormButtonProps) {
	if (isLoading) {
	  return (
		<Button variant="default" disabled>
		  <Loader2 className="animate-spin" />
		  {text}
		</Button>
	  );
	}
	
	return <Button variant="default" type="submit">{text}</Button>;
  }