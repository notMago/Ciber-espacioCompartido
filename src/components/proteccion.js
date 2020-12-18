import { useRouter } from "next/router";
import { useEffect, useState, Fragment } from "react";

export default function panel() {
  const { push } = useRouter();

  const useUser = () => ({
    user: null,
    loading: false,
  });

  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!(user || loading)) {
      router.push("/hola");
    }
  }, [user, loading]);
}
