"use client";

import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

interface Props {
  data: Category[];
}

export default function Categories({ data }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  const styles =
    "flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition";

  const onClick = (id: string | undefined) => {
    const query = { categoryId: id };

    const url = queryString.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="w-full overflow-x-auto space-x-2 flex p-1">
      <button
        onClick={() => onClick(undefined)}
        className={cn(styles, !categoryId ? "bg-primary/25" : "bg-primary/10")}
      >
        Newest
      </button>

      {data.map((item) => (
        <button
          onClick={() => onClick(item.id)}
          className={cn(
            styles,
            item.id === categoryId ? "bg-primary/25" : "bg-primary/10"
          )}
          key={item.id}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
