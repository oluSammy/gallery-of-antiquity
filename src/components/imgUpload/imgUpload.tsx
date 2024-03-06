/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

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
};

function ImgUpload(props: Props) {
  const onDrop = useCallback((acceptedFiles: any[]) => {
    props.setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });

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
        {props.files.length > 0 && (
          <figure className="w-full h-[170px]">
            {" "}
            <Image
              src={props.files[0].preview}
              alt={props.files[0].name}
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-md"
            />
            <span className="text-xs mt-2">{props.files[0].name}</span>
          </figure>
        )}
      </div>
    </div>
  );
}

export default ImgUpload;
