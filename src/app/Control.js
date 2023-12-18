"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const params = useParams();
  const router = useRouter();
  // console.log("params :", params);
  const id = params.id;

  const deleteHandler = () => {
    const option = {
      method: "DELETE",
    };
    fetch(`http://localhost:9999/topics/${id}`, option)
      .then((resp) => resp.json())
      .then(() => {
        router.push("/");
        router.refresh();
      });
  };
  return (
    <ul>
      <li>
        <Link href="/create">create</Link>
      </li>

      {id && (
        <>
          <li>
            <Link href={`/update/${id}`}>Update</Link>
          </li>
          <li>
            <input type="button" value="delete" onClick={deleteHandler} />
          </li>
        </>
      )}
    </ul>
  );
}
