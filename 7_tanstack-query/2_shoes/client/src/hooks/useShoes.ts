import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import shoeApi from "../service/shoe";
import { ShoeFormValues } from "../types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useShoes = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const shoes = () =>
    useQuery({
      queryKey: ["shoes"],
      queryFn: () => shoeApi.getAll(),
      select: (data) => data.data,
    });

  const shoe = (id: string) =>
    useQuery({
      queryKey: ["shoe", id],
      queryFn: () => shoeApi.getById(id),
      select: (data) => data.data,
    });

  const create = useMutation({
    mutationKey: ["create-shoe"],
    mutationFn: (data: ShoeFormValues) => shoeApi.create(data),
    onSuccess: () => {
      // yeni bir veri oluşturulduğunda cache'i güncelle
      // shoes key'ine sahip sorguyu yeniden çalıştır
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      navigate("/admin");
      toast.success("Ürün başarıyla oluşturuldu");
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Bir hata oluştu");
    },
  });

  const update = useMutation({
    mutationKey: ["update-shoe"],
    mutationFn: ({ id, data }: { id: string; data: Partial<ShoeFormValues> }) =>
      shoeApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      navigate("/admin");
      toast.success("Ürün başarıyla güncellendi");
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Bir hata oluştu");
    },
  });

  const remove = useMutation({
    mutationKey: ["remove-shoe"],
    mutationFn: (id: string) => shoeApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      toast.success("Ürün başarıyla silindi");
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Bir hata oluştu");
    },
  });

  return { shoes, shoe, create, update, remove };
};

export default useShoes;
