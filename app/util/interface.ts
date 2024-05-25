export interface Test {
  id: number;
  text: string;
  created_at: string;
}

export type Props = {
  items: Test[];
};
