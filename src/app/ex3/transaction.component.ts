export interface ShortTransaction {
  id: string;
  amount: number;
  balance: number;
  label: string;
  date: string;
}

export interface FinalOperation {
  date: Date;
  no1: number;
  selectedOperation: string;
  no2: number;
  result: number;
}
