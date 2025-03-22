import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import authApi from "../service/auth";
import { LoginValues, RegisterValues } from "../types";
import { toast } from "react-toastify";

// Custom Hook- Kendi oluşturduğumuz hooklar
// useAuth hooku ile auth ile alakalı bütün işlemleri yapabiliriz
const useAuth = () => {
  const navigate = useNavigate();

  const login = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginValues) => authApi.login(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Giriş başarılı");
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Bir hata oluştu");
    },
  });

  const register = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: RegisterValues) => authApi.register(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Kayıt başarılı");
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Bir hata oluştu");
    },
  });

  const logout = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      navigate("/login");
      toast.success("Çıkış başarılı");
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Bir hata oluştu");
    },
  });

  return {
    login,
    register,
    logout,
  };
};

export default useAuth;
