export type RepoLabelData = {
  color?: string;
  default?: boolean;
  description?: string;
  id?: number;
  name?: string;
  node_id?: number;
  url?: string;
};
export type repoLabelArr = [RepoLabelData];

export type CreateLabelData = {
  color?: string;
  default?: boolean;
  description?: string;
  id?: number;
  name?: string;
  node_id?: number;
  url?: string;
};

export type CreateLabelDataArr = [CreateLabelData];
