import { useEffect, useState } from "react";

import { PAGINATION } from "@/constants";

interface UseEntitySearchProps<
  T extends {
    search: string;
    page: number;
  },
> {
  params: T;
  setParams: (params: T) => void;
  debounceMs?: number;
}

export function useEntitySearch<
  T extends {
    search: string;
    page: number;
  },
>({ params, setParams, debounceMs = 500 }: UseEntitySearchProps<T>) {
  const [localSearch, setLocalSearch] = useState(() => params.search);

  useEffect(() => {
    const trimmedSearch = localSearch.trim();

    if (trimmedSearch === params.search) {
      return;
    }

    const timer = window.setTimeout(() => {
      setParams({
        ...params,
        search: trimmedSearch,
        page: PAGINATION.DEFAULT_PAGE,
      });
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [localSearch, params, setParams, debounceMs]);

  return {
    searchValue: localSearch,
    onSearchChange: setLocalSearch,
  };
}
