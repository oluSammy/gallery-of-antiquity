"use client";

import NewProduct from "@/components/NewProduct/NewProduct";
import AdminPageLayout from "@/containers/AdminPageLayout";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <AdminPageLayout pageTitle="Categories" pageLabel="Update Category">
      <NewProduct productId={params.id} />
    </AdminPageLayout>
  );
};

export default Page;
