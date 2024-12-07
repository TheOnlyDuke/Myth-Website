import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { USER_INFO, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && USER_INFO === null) {
      router.push("/auth/login");
    }
  }, [USER_INFO, isLoading, router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return children;
};

export default ProtectedRoute;
