"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
  const router = useRouter();

  const params = useParams();
  const id = params.id;

  const [info, setInfo] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    fetch(`http://localhost:9999/topics/${id}`)
      .then((resp) => resp.json())
      .then((result) => {
        // console.log(result);
        setInfo({ ...info, title: result.title, body: result.body });
      });
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;

        const option = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };

        fetch(`http://localhost:9999/topics/${id}`, option)
          .then((res) => res.json())
          .then((result) => {
            const id = result.id;
            router.push(`/read/${id}`);
            router.refresh();
          });
      }}
    >
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={info.title}
          onChange={(e) => setInfo({ ...info, title: e.target.value })}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={info.body}
          onChange={(e) => setInfo({ ...info, body: e.target.value })}
        ></textarea>
      </p>
      <p>
        <input type="submit" value="update" />
      </p>
    </form>
  );
}
