import request from "@/utils/request";

export const worksApi = (params: {
  limit: number;
  previous?: any;
  createdBy?: any;
  keyword?: any;
}) => request.get<any, RequsetResponse>("/api/api/media/list", { params });
