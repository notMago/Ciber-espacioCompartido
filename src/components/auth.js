import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem("correo");
    const password = localStorage.getItem("contraseña");

    setLoading(false);
    if (email && password) {
      setUser({ email, password });
    }
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push("/hola");
    }
  }, [user, loading]);
  return { user, loading };
};
