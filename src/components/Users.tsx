import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "./api";
import { JsonPrint } from "./JsonPrint";

export function Users() {
  const {
    isLoading,
    refetch,
    error,
    data,
    dataUpdatedAt,
    isFetched,
    isInitialLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    // cacheTime: 5000,
    enabled: false,
  });

  useEffect(() => {
    !data && refetch();
  }, []);

  const navigate = useNavigate();
  const handleClick = (user: any) => {
    navigate({
      pathname: "/user",
      search: "id=" + user.id,
    });
  };

  return (
    <div className="row">
      <div className="">
        <JsonPrint>
          {{
            isLoading,
            error,
            dataUpdatedAt,
            isFetched,
            isInitialLoading,
          }}
        </JsonPrint>
        {data?.map((user: any) => {
          return (
            <button
              type="button"
              key={user.id}
              onClick={() => handleClick(user)}
              className="btn btn-light border border-dark m-1"
            >
              {user.id} : {user.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
