"use client";

import NewProduct from "@/components/NewProduct/NewProduct";
import AdminPageLayout from "@/containers/AdminPageLayout";

const Page = () => {
  return (
    <AdminPageLayout pageTitle="Products" pageLabel="Create Products">
      <NewProduct />
    </AdminPageLayout>
  );
};

export default Page;
