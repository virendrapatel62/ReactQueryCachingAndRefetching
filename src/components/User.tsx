import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getUsers } from "./api";
import { JsonPrint } from "./JsonPrint";

export const User: React.FC = () => {
  const [seachParam] = useSearchParams();
  const client = useQueryClient();

  console.log(client.getQueryData(["users"]));
  const nav = useNavigate();
  const id = +(seachParam.get("id") || 1);
  // const user = (client.getQueryData(["users"]) as any[])[id - 1];
  const { data: user, refetch } = useQuery({
    queryKey: ["users"],
    enabled: false,
    select: (users: any) => {
      return users[id - 1];
    },
    queryFn: getUsers,
  });

  useEffect(() => {
    !user && refetch();
  }, []);

  return (
    <div>
      <h1>User With Id {id}</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          nav("/");
        }}
      >
        Go back
      </button>
      <div className="mt-4">
        {user ? <JsonPrint>{{ user }}</JsonPrint> : <h1>No User In Cache</h1>}
      </div>
    </div>
  );
};
