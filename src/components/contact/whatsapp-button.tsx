"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

interface WhatsAppButtonProps {
  phoneNumber: string;
  text?: string;
  message?: string;
  fullWidth?: boolean;
  className?: string;
}

export function WhatsAppButton({
  phoneNumber,
  text = "WhatsApp",
  message = "",
  fullWidth = false,
  className,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}${message ? `?text=${encodedMessage}` : ""}`,
      "_blank",
    );
  };

  return (
    <Button
      className={cn(
        "rounded-full bg-green-600 text-white hover:bg-green-700",
        fullWidth && "w-full",
        className,
      )}
      onClick={handleClick}
    >
      <SiWhatsapp />
      {text}
    </Button>
  );
}
