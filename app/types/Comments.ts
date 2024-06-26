export type User = {
  id: string;
  lastName: string;
  userName: string;
  firstName: string;
  created_at: string;
  updated_at: string;
  profileImageUrl: string;
};

export type Comments = {
  id: string;
  text: string;
  user_id: string;
  created_at: string;
  isEdited: boolean;
  lastUpdatedAt: string;
  count: string;
  user: User;
};
