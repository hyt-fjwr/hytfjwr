import { User } from "./Comments";
export type Emotion = {
  id: number;
  country_code: string;
  created_at: string;
  user_id: string;
  content: string;
  user: User;
};
