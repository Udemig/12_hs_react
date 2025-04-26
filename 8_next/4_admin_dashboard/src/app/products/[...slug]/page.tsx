import Field from "@/components/form/field";
import ImagePreview from "@/components/form/image-preview";
import { Product } from "@/types";
import { categories, inputs } from "@/utils/constants";
import { createProduct } from "@/utils/service";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import Link from "next/link";
import { redirect } from "next/navigation";

// Action anında kullanılacak fonksiyon
// bu yöntem sayesinde client component yapmadan formu yönetebiliriz
const handleSubmit = async (formData: FormData) => {
  "use server"; // server action

  // form verilerini al
  const name = formData.get("name") as string;
  const brand = formData.get("brand") as string;
  const price = formData.get("price") as string;
  const stock = formData.get("stock") as string;
  const rating = formData.get("rating") as string;
  const reviews_count = formData.get("reviews_count") as string;
  const category = formData.get("category") as string;
  const image_url = formData.get("image_url") as string;
  const description = formData.get("description") as string;

  // ürün bilgilerini nesne haline getir
  const productData: Omit<Product, "id"> = {
    name,
    brand,
    category,
    description,
    image_url,
    price: parseFloat(price),
    stock: parseInt(stock),
    rating: parseFloat(rating),
    reviews_count: parseInt(reviews_count),
  };

  try {
    await createProduct(productData);

    // redirect fonksiyonu doğası gereği fırlatır
    // bu hatayı nextjs yakalar ve bizi iligili sayfaya yönlendirir
    // bu yüzden yönlendirme anında redirect'in fırlattığı hatayı yakalayp nextjs'in yakalaması için tekrar fırlatmalıyız
    redirect(`/products`);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.log(error);
    throw new Error("Ürün oluşturma hatası");
  }
};

// Form Componenti
function ProductForm() {
  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Sol Sütun */}
        <div className="space-y-6">
          {inputs.map((input, key) => (
            <Field key={key} htmlFor={input.name} label={input.label}>
              <input
                id={input.name}
                name={input.name}
                type={input.type}
                className="input"
                required
              />
            </Field>
          ))}

          <Field htmlFor="category" label="Kategori">
            <select name="category" id="category" className="input" required>
              <option value="">Kategori Seçiniz</option>
              {categories.map((cat, key) => (
                <option key={key} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {/* Sağ Sütun */}
        <div className="space-y-6">
          {/* Resim Inputu */}
          <Field htmlFor="image_url" label="Resim URL">
            <input
              type="text"
              name="image_url"
              id="image_url"
              className="input"
              required
            />
          </Field>

          {/* Resim Önizleme */}
          <ImagePreview imageInputId="image_url" />

          {/* Açıklama Inputu */}
          <Field htmlFor="description" label="Açıklama">
            <textarea
              name="description"
              id="description"
              className="input sm:text-sm md:min-h-[220px]"
              rows={5}
              required
            ></textarea>
          </Field>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="px-6 py-2 rounded-md text-white transition-colors bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 cursor-pointer disabled:cursor-not-allowed"
        >
          Gönder
        </button>
      </div>
    </form>
  );
}

// Form Sayfası
export default function FormPage() {
  return (
    <div className="page container mx-auto p-4 md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="title">Yeni Ürün Oluştur</h1>

        <Link
          href={"/products"}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
        >
          Geri
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <ProductForm />
      </div>
    </div>
  );
}
