export interface Lecture {
  id: number;
  title: string;
  instructor: string;
  thumbnail: string;
}

export interface PayProps {
  name: string;
  amount: number;
  buyer_email: string;
  buyer_name: string;
  buyer_tel: string;
  lectures: Lecture[];
  buyer_id: string;
}
