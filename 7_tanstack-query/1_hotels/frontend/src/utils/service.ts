import { useMutation, useQuery } from "@tanstack/react-query";
import { Place, PlaceData, PlaceResponse, PlacesResponse } from "../types";
import api from "./api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

/*
 * useQuery hookuna api isteğinin ismini ve isteği atan fonksiyonu veriyoruz
 * useQuery bizim için api isteğini yapıyor sürecin state'ini yönetiyor
 * isLoading,error,data gibi state'leri bizim için tutuyor
 * eğer error gelirse geçici bir hata olmadığından emin olmak için aynı adrese 3 istek daha atar
 * eğer data gerlirse cevabı cache'e atar
 * birden fazla component'da aynı veriye ihticanız varsa ayrıca state maanagment kütüphanesi gerek duymadan bütün component'larda api isteğini atarsınız sadece ilk istek api'a gider diğerleri cahce'deki cevabı kullanır
 */
export const usePlaces = (paramsObj?: any) => {
  return useQuery({
    // sorgu için benzersiz bir isim
    queryKey: ["places", paramsObj],
    // api isteği atan fonksiyon
    queryFn: () =>
      api
        .get<PlacesResponse>("/places", { params: paramsObj })
        .then((res) => res.data.places),
    // eğer error gelirse geçici bir hata olmadığından emin olmak için aynı adrese 3 istek daha atar
    retry: 3,
    // her istek arasında 1 saniye bekle
    retryDelay: 1000,
    // stale time: cache'deki verinin "taze / geçerli" kalma süresi
    staleTime: 0,
    // cache'deki verinin "bayat olma / temzilenme" süresi - garbage collection
    gcTime: 300000,
  });
};

export const useCreatePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    // mutation key
    mutationKey: ["create"],
    // api isteğini atan fonksiyon
    mutationFn: (body: PlaceData) => api.post("/places", body),
    // istek başarılı olduğunda
    onSuccess: (res) => {
      toast.success("Konaklama noktası oluşturuldu");
      navigate(`/`);
    },
    // istek başarısız olduğunda
    onError: (error) => {
      toast.error("Bir hata oluştus");
    },
  });
};

export const usePlace = (id: string) => {
  return useQuery({
    queryKey: ["place"],
    queryFn: () =>
      api.get<PlaceResponse>(`/place/${id}`).then((res) => res.data.place),
  });
};

export const useRemovePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["remove"],

    mutationFn: (id: number) => api.delete(`/place/${id}`),

    onSuccess: () => {
      toast.success("Konaklama noktası kaldırıldı");
      navigate("/");
    },

    onError: () => {
      toast.error("Bir hata oluştu");
    },
  });
};
