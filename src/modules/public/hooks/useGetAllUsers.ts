import { useQuery } from "@tanstack/react-query";

import { GithubService } from "@services/github.service";

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => new GithubService().getAllUsers(),
  });
};
