import Field from "@/components/form/field";
import ImagePreview from "@/components/form/image-preview";
import { Product } from "@/types";
import { categories, inputs } from "@/utils/constants";
import { createProduct, getProduct, updateProduct } from "@/utils/service";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

// Action anında kullanılacak fonksiyon
// bu yöntem sayesinde client component yapmadan formu yönetebiliriz
const handleSubmit = async (formData: FormData) => {
  "use server"; // server action

  // form verilerini al
  const id = formData.get("id") as string;
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
    if (id) {
      await updateProduct(id, productData);
    } else {
      await createProduct(productData);
    }

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
function ProductForm({ product }: { product: Product | null }) {
  return (
    <form action={handleSubmit} className="space-y-6">
      {/* düzenleme modunda handle submit içerisinde id'yi aktarabilmek için input'u gizli yapıyoruz */}
      {product && <input type="hidden" name="id" value={product?.id} />}

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
                defaultValue={product?.[input.name as keyof Product]}
              />
            </Field>
          ))}

          <Field htmlFor="category" label="Kategori">
            <select
              name="category"
              id="category"
              className="input"
              required
              defaultValue={product?.category}
            >
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
              defaultValue={product?.image_url}
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
              defaultValue={product?.description}
            ></textarea>
          </Field>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="px-6 py-2 rounded-md text-white transition-colors bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 cursor-pointer disabled:cursor-not-allowed"
        >
          {product ? "Güncelle" : "Oluştur"}
        </button>
      </div>
    </form>
  );
}

// Form Sayası Type
type Props = {
  params: Promise<{ slug: string[] }>;
};

// Form Sayfası
export default async function FormPage({ params }: Props) {
  // url'deki parametreleri al
  const { slug } = await params;

  // düzenlenicek ürünün bilgilerini tutacak değişken
  let product: Product | null = null;

  // edit sayfasındaysak
  if (slug[0] === "edit" && slug[1]) {
    try {
      // düzenlenicek ürünün bilgilerini getir
      product = await getProduct(slug[1]);

      // ürün bulunamadıysa 404 sayfasına yönlendir
      if (!product) notFound();
    } catch (error) {
      notFound();
    }
  }

  // sayfa başlığı
  const pageTitle = product ? "Ürünü Düzenle" : "Yeni Ürün Oluştur";

  return (
    <div className="page container mx-auto p-4 md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="title">{pageTitle}</h1>

        <Link
          href={"/products"}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
        >
          Geri
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <ProductForm product={product} />
      </div>
    </div>
  );
}
