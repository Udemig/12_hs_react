"use client";
import { useEffect, useState } from "react";
import Field from "./field";
import Image from "next/image";

type Props = {
  imageInputId: string;
};

const ImagePreview = ({ imageInputId }: Props) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // resim url'inin girildiği input elementini al
    const imageInput = document.getElementById(
      imageInputId
    ) as HTMLInputElement;

    // inptun değişme anında çalışıcak fonksiyon
    const handleChange = () => {
      const newUrl = imageInput.value;
      setImageUrl(newUrl);

      if (newUrl) {
        // url'in geçerli bir resim url'i olduğunu kontrol et
        const testImg = new globalThis.Image();

        // resmin yüklendiğini kontrol et
        testImg.onload = () => {
          setIsValid(true);
          setIsLoading(false);
        };

        // resim yüklenemediğinde
        testImg.onerror = () => {
          setIsValid(false);
          setIsLoading(false);
        };

        // test resminin kaynağını ayarla
        testImg.src = newUrl;
      } else {
        setIsValid(false);
        setIsLoading(false);
      }
    };

    // inputa olay izleyici ekle
    if (imageInput) {
      imageInput.addEventListener("input", handleChange);
      handleChange();
    }

    // compnent unmount anında izleyiciyi temizle
    return () => {
      if (imageInput) {
        imageInput.removeEventListener("input", handleChange);
      }
    };
  }, [imageInputId]);

  return (
    <Field htmlFor={imageInputId} label="Resim Önizleme">
      <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden">
        {isLoading ? (
          <div>Resim Yükleniyor</div>
        ) : isValid && imageUrl ? (
          <Image
            src={imageUrl}
            alt="Resim Önizleme"
            fill
            className="object-contain"
            unoptimized
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            {imageUrl ? "Geçersiz Resim URL" : "Resim Yok"}
          </div>
        )}
      </div>
    </Field>
  );
};

export default ImagePreview;
