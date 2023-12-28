import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrencyIDR(amount: number): string {
  // Check if the amount is a valid number
  if (isNaN(amount)) {
      return "Invalid amount";
  }

  // Format the currency using the local convention for IDR
  const formattedAmount: string = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
  }).format(amount);

  return formattedAmount;
}


export const ScrollTop = () => {
  scrollTo({
    behavior: "smooth",
    top: 0,
  });
};