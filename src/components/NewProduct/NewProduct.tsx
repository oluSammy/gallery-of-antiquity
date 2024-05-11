import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Dropdown from "../Dropdown/Dropdown";
import useGetTopCategories from "@/hooks/useGetTopCategories";
import useApiClient from "@/hooks/useApiClient";
import { useAppDispatch } from "@/redux/hooks";
import { useMutation, useQuery } from "react-query";
import { constants } from "@/constants/constants";
import { useSession } from "next-auth/react";
import { openNotificationWithMessage } from "@/redux/Notification";
import { MdOutlineArrowDropDown } from "react-icons/md";
import CustomInput from "../Input/Input";
import ImgUpload from "../imgUpload/imgUpload";
import ActionButton from "../Button/ActionButton";
import { useRouter } from "next/navigation";
import MDTextArea from "../Markdown/Editor";

type Props = {
  productId?: string;
};

const NewProduct = ({ productId }: Props) => {
  const [category, setCategory] = useState({ id: "", name: "" });
  const [name, setName] = useState("");
  const [small, setSmall] = useState("");
  const [large, setLarge] = useState("");
  const [medium, setMedium] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState<string | undefined>("");
  const [priceType, setPriceType] = useState<"fixed" | "range">("fixed");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [files, setFiles] = useState<any[]>([]);
  const [topCategory, setTopCategory] = useState({
    id: "",
    name: "",
  });
  const [productPic, setProductPic] = useState("");

  const { data: session } = useSession();
  const apiClient = useApiClient();
  const dispatch = useAppDispatch();
  const router = useRouter();

  // fetch all top categories
  const { data: topCategories, isLoading: isLoadingTopCategories } =
    useGetTopCategories(1, 10000, "", "");

  const { data: categories, isFetching: isFetchingCategories } = useQuery<
    any,
    Error
  >(
    ["get-categories-by-top-category-Id", topCategory.id],
    async () => {
      let urlString = `${constants.categoriesByTopCategoryId(topCategory.id)}`;
      const response = await apiClient.get(urlString);
      return response.data;
    },
    {
      keepPreviousData: true,
      enabled: topCategory.id ? true : false,
    }
  );

  const { isLoading, mutate, data } = useMutation({
    mutationFn: async () => {
      try {
        // if it's an update check that the form was updated

        if (productId) {
          const prevProduct = product.product[0];
          if (
            !files[0] &&
            category.id === prevProduct.productCategoryId._id &&
            topCategory.id === prevProduct.productFeatId._id &&
            name === prevProduct.productName &&
            size === prevProduct.size.join(",") &&
            description === prevProduct.description &&
            amount === prevProduct.amount &&
            quantity === prevProduct.quantity
          ) {
            dispatch(
              openNotificationWithMessage({
                type: "warning",
                title: "Info",
                description: "No changes made",
              })
            );
            return;
          }
        }

        const formData = new FormData();
        if (files[0]) {
          formData.append("productPic", files[0]);
        }
        formData.append("productName", name);
        formData.append("productCategoryId", category.id);
        formData.append("productFeatId", topCategory.id);
        formData.append("description", description || "");
        if (priceType === "fixed") {
          formData.append("amount", amount);
        } else {
          const amountRange = [];
          if (small) {
            amountRange.push({ size: "small", amount: small });
          }
          if (medium) {
            amountRange.push({ size: "medium", amount: medium });
          }
          if (large) {
            amountRange.push({ size: "large", amount: large });
          }
          formData.append("amountRange", JSON.stringify(amountRange));
        }
        formData.append("quantity", quantity);
        formData.append("inStock", "true");

        const method = productId ? "put" : "post";
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL;
        const url = productId
          ? `${baseUrl}/product/${productId}`
          : `${baseUrl}/product`;

        await apiClient[method](url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${session?.user.accessToken}`,
          },
        });

        if (productId) {
          dispatch(
            openNotificationWithMessage({
              type: "success",
              title: "Done",
              description: "Product Updated",
            })
          );
          router.push("/admin/products");
          return;
        }

        // reset states
        setName("");
        setSize("");
        setDescription("");
        setAmount("");
        setQuantity("");
        setFiles([]);
        setTopCategory({
          id: "",
          name: "",
        });
        setSmall("");
        setMedium("");
        setLarge("");

        dispatch(
          openNotificationWithMessage({
            type: "success",
            title: "Done",
            description: "Product Created",
          })
        );
      } catch (error) {
        dispatch(
          openNotificationWithMessage({
            type: "error",
            title: "Error",
            description: "Unable to create product",
          })
        );
      }
    },
  });

  const { data: product, isLoading: isLoadingProduct } = useQuery(
    ["get-product", productId],
    async () => {
      const url = constants.PRODUCTS(productId);
      const response = await apiClient.get(url);
      return response.data;
    },
    {
      enabled: !!productId,
    }
  );

  useEffect(() => {
    if (product) {
      const prevProduct = product.product[0];
      setCategory({
        id: prevProduct.productCategoryId._id,
        name: prevProduct.productCategoryId.categoryName,
      });
      setName(prevProduct.productName);
      // setSize(prevProduct.size.join(","));
      setDescription(prevProduct.description);
      setAmount(prevProduct.amount);
      setQuantity(prevProduct.quantity);
      setTopCategory({
        id: prevProduct.productFeatId._id,
        name: prevProduct.productFeatId.productType,
      });
      setProductPic(prevProduct.productPic);
    }
  }, [product]);

  // const onDescriptionChange = (value: string | undefined) => {
  //   setDescription(value);
  // };

  return (
    <div>
      <div className="mt-8 flex items-center ">
        <Link
          href="/admin/products"
          className={`flex items-center mr-4 text-[#737373] hover:bg-[#f7f7f7] px-2 py-1 cursor-pointer rounded-sm w-fit`}
        >
          <span className="mr-2">Products</span>
          <IoIosArrowForward />
        </Link>
        <button
          className={`flex items-center mr-8 hover:bg-[#f7f7f7] px-2 py-1 cursor-pointer font-bold rounded-sm w-fit`}
        >
          <span className="mr-5">
            {productId ? "Update Product" : "Add New Product"}
          </span>
        </button>
      </div>
      <div className="mt-8 ml-5 pb-20">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-6 col-span-full">
            <div className="mt-8 mb-8">
              <Dropdown
                DropdownTrigger={
                  <span className="text-[18px] font-normal text-blue-link hover:text-[#EB0B0B] flex items-center ">
                    {topCategory.id ? topCategory.name : "Select Top Category"}
                    <span className="ml-0.5">
                      <MdOutlineArrowDropDown size={22} />
                    </span>
                  </span>
                }
                DropdownContent={
                  <ul className="flex flex-col overflow-hidden">
                    {isLoadingTopCategories
                      ? "loading..."
                      : topCategories?.products?.products?.map((item: any) => {
                          return (
                            <button
                              onClick={() => {
                                setCategory({ id: "", name: "" });
                                setTopCategory({
                                  id: item._id,
                                  name: item.productType,
                                });
                              }}
                              //   href={`/${item.link}`}
                              key={item.productType}
                              className="px-6 py-1.5 w-full text-sm cursor-pointer capitalize hover:bg-gray-50 "
                            >
                              {item.productType}
                            </button>
                          );
                        })}
                  </ul>
                }
              />
            </div>
            <div className="mt-8 mb-8">
              <Dropdown
                DropdownTrigger={
                  <span className="text-[18px] font-normal text-blue-link hover:text-[#EB0B0B] flex items-center ">
                    {category.id ? category.name : "Select Category"}
                    <span className="ml-0.5">
                      <MdOutlineArrowDropDown size={22} />
                    </span>
                  </span>
                }
                DropdownContent={
                  <ul className="flex flex-col overflow-hidden">
                    {isFetchingCategories
                      ? "loading..."
                      : categories?.category?.map((item: any) => {
                          return (
                            <button
                              onClick={() => {
                                setCategory({
                                  id: item._id,
                                  name: item.categoryName,
                                });
                              }}
                              key={item.categoryName}
                              className="px-6 py-1.5 w-full text-sm cursor-pointer capitalize hover:bg-gray-50 "
                            >
                              {item.categoryName}
                            </button>
                          );
                        })}
                  </ul>
                }
              />
            </div>
            <CustomInput
              value={name}
              setValue={setName}
              type="text"
              placeholder="Product Name"
              className="mb-2"
            />
            <>
            <p className="mt-6 mb-2" >Product Description</p>
              <MDTextArea
                value={description}
                onDescriptionChange={(value?: string) => {
                  setDescription(value);
                }}
              />
            </>
            {/* <CustomInput
              value={description}
              setValue={setDescription}
              type="textarea"
              placeholder="Product Description"
              className="mb-2"
            /> */}
            <div className="my-4">
              <h4 className="font-bold mb-2">Price Type</h4>
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  <label htmlFor="fixed" className="cursor-pointer">
                    Fixed
                  </label>
                  <input
                    className="mr-1.5 ml-1 cursor-pointer"
                    id="fixed"
                    name="price-type"
                    type="radio"
                    value={priceType}
                    checked={priceType === "fixed"}
                    onChange={(e) => setPriceType("fixed")}
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="range" className="cursor-pointer">
                    Range
                  </label>
                  <input
                    className="mr-1.5 ml-1 cursor-pointer"
                    id="range"
                    name="price-type"
                    value={priceType}
                    type="radio"
                    onChange={(e) => setPriceType("range")}
                    checked={priceType === "range"}
                  />
                </div>
              </div>
            </div>
            {priceType === "fixed" ? (
              <CustomInput
                value={amount}
                setValue={setAmount}
                type="number"
                placeholder="Amount"
                className="mb-2"
              />
            ) : (
              <div>
                <CustomInput
                  value={small}
                  setValue={setSmall}
                  type="number"
                  placeholder="Amount for small"
                  className="mb-2"
                />
                <CustomInput
                  value={medium}
                  setValue={setMedium}
                  type="number"
                  placeholder="Amount for medium"
                  className="mb-2"
                />
                <CustomInput
                  value={large}
                  setValue={setLarge}
                  type="number"
                  placeholder="Amount for large"
                  className="mb-2"
                />
              </div>
            )}
            <CustomInput
              value={quantity}
              setValue={setQuantity}
              type="number"
              placeholder="quantity"
              className="mb-2"
            />

            <ImgUpload files={files} setFiles={setFiles} url={productPic} />

            <ActionButton
              label={productId ? "Update Product" : "Create New Product"}
              onClick={mutate}
              className="mt-8"
              disabled={
                !category.id ||
                !topCategory.id ||
                !name ||
                (!amount && (!small || !medium || !large)) ||
                !quantity ||
                (!files.length && !productPic)
              }
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
