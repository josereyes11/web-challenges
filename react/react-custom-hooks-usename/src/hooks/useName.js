import { useState } from "react";

export default function useName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = `${firstName} ${lastName}`;

  return [fullName, setFirstName, setLastName];
}
