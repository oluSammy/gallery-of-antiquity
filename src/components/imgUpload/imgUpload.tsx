/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import ActionButton from "../Button/ActionButton";

export type FileType = {
  path: string;
  preview: string;
  lastModified: string;
  lastModifiedDate: string;
  name: string;
  size: string;
  type: string;
  webkitRelativePath: string;
};

type Props = {
  files: FileType[];
  setFiles: React.Dispatch<React.SetStateAction<FileType[]>>;
  url?: string;
};

function ImgUpload(props: Props) {
  const [previews, setPreviews] = useState<FileType[]>([]);
  const [imgUrl, setImgUrl] = useState<string>(props.url || "");
  const onDrop = useCallback(
    (acceptedFiles: any[]) => {
      props.setFiles(
        acceptedFiles.map((file) => {
          return file;
        })
      );

      setPreviews(
        acceptedFiles.map((file) => {
          return Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
        })
      );
    },
    [props]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });

  useEffect(() => {
    if (props.url) {
      setImgUrl(props.url);
    }
  }, [props.url]);

  if (props.url && imgUrl) {
    return (
      <div className="flex items-baseline ">
        <figure className="w-[90%] mr-2 h-[170px]">
          {" "}
          <Image
            src={props.url}
            alt={props.url}
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-md"
          />
        </figure>
        <ActionButton
          label="update"
          onClick={() => setImgUrl("")}
          className="-mt-4"
        />
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-12 gap-x-8">
      <div
        {...getRootProps()}
        className="border border-dashed col-span-full lg:col-span-6 h-44 px-4 border-black rounded-md flex items-center justify-center cursor-pointer w-full"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here ...</p>
        ) : (
          <p>Drag 'n' drop image here, or click to select image</p>
        )}
      </div>
      <div className="col-span-full lg:col-span-6">
        {previews.length > 0 && (
          <figure className="w-full h-[170px]">
            {" "}
            <Image
              src={previews[0].preview}
              alt={previews[0].name}
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-md"
            />
            <span className="text-xs mt-2">{previews[0].name}</span>
          </figure>
        )}
      </div>
    </div>
  );
}

export default ImgUpload;
