export type CustomErrorType = Error & {
  status?: number;
  code?: number;
};
