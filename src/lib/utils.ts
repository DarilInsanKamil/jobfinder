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
    // behavior: "smooth",
    top: 0,
  });
};
export function hitungSelisihHari(created_at: string): string {
  const waktuDibuat: Date = new Date(created_at);
  const waktuSekarang: Date = new Date();

  const waktuDibuatLocale: string = waktuDibuat.toLocaleString('id-ID');
  // const waktuSekarangLocale: string = waktuSekarang.toLocaleString();

  const selisihMillis: number = waktuSekarang.getTime() - waktuDibuat.getTime();

  const selisihDetik: number = Math.floor(selisihMillis / 1000);
  const selisihMenit: number = Math.floor(selisihDetik / 60);
  const selisihJam: number = Math.floor(selisihMenit / 60);
  const selisihHari: number = Math.floor(selisihJam / 24);

  if (selisihHari > 0) {
    return `Diperbarui ${selisihHari} hari yang lalu`;
  } else if (selisihJam > 0) {
    return `${selisihJam} jam yang lalu`;
  } else {
    return `${selisihMenit} menit yang lalu`;
  }
}
export function updateHari(created_at: string): string {
  const waktuDibuat: Date = new Date(created_at);
  const waktuSekarang: Date = new Date();

  const waktuDibuatLocale: string = waktuDibuat.toLocaleString('id-ID');
  // const waktuSekarangLocale: string = waktuSekarang.toLocaleString();

  const selisihMillis: number = waktuSekarang.getTime() - waktuDibuat.getTime();

  const selisihDetik: number = Math.floor(selisihMillis / 1000);
  const selisihMenit: number = Math.floor(selisihDetik / 60);
  const selisihJam: number = Math.floor(selisihMenit / 60);
  const selisihHari: number = Math.floor(selisihJam / 24);

  if (selisihHari > 0) {
    return `Diperbarui ${selisihHari} hari yang lalu`;
  } else if (selisihJam > 0) {
    return `${selisihJam} jam yang lalu`;
  } else {
    return `${selisihMenit} menit yang lalu`;
  }
}

export const splitter = (str: string) => {
  if (typeof str == 'string') {
    return str.split('\n');
  }
}