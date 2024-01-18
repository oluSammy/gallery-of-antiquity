const PageHeader = ({ title }: { title: string }) => {
  return (
    <h1 className="mb-6 text-[#363636] font-semibold text-4xl pb-5 border-b border-[#E5E4E4]">
      {title}
    </h1>
  );
};

export default PageHeader;
