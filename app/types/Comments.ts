export interface Comments {
  id: string;
  text: string;
  user_id: string;
  created_at: string;
  isEdited: boolean;
  lastUpdatedAt: string;
  user: {
    id: string;
    lastName: string;
    userName: string;
    firstName: string;
    created_at: string;
    updated_at: string;
    profileImageUrl: string;
  };
}
