export type User = {
  id: string;
  lastName: string;
  userName: string;
  firstName: string;
  created_at: string;
  updated_at: string;
  profileImageUrl: string;
};

export type Replies = {
  id: string;
  msg_id: string;
  text: string;
  user_id: string;
  created_at: string;
  user: User;
};
