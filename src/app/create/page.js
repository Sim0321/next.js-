"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Create() {
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:9999/topics")
      .then((resps) => resps.json())
      .then((result) => console.log(result));
    // console.log(resps);
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;

        const option = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };

        fetch(`${process.env.NEXT_PUBLIC_API_URL}topics`, option)
          .then((res) => res.json())
          .then((result) => {
            const id = result.id;
            router.push(`/read/${id}`);
            router.refresh();
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
