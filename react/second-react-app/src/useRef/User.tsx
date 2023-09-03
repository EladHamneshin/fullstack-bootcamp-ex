import React from "react";
import { UserType } from "./types/User";

type Props = {user: UserType};

export default function User(props: Props) {
  return <div>
    <div>{props.user.name}</div>
    <div>{props.user.age}</div>
    <div>{props.user.email}</div>
    </div>;
}
