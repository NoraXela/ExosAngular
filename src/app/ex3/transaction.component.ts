export interface ShortTransaction {
  id: string;
  amount: number;
  balance: number;
  label: string;
  date: string;
}

export interface LongTransaction {
  id: string;
  amount: number;
  balance: number;
  label: string;
  description: string;
  date: string;
}
