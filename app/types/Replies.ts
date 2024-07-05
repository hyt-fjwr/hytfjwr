import { User } from "./Comments";
export type Replies = {
  id: string;
  msg_id: string;
  text: string;
  user_id: string;
  created_at: string;
  user: User;
};
