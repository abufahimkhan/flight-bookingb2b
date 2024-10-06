"use client";
import KeepHeading from "@/components/keep-react/KeepHeading";
import {
  Upload,
  UploadBody,
  UploadFooter,
  UploadIcon,
  UploadText,
} from "keep-react";
import { File, Info, Trash } from "phosphor-react";
import { useCallback, useState } from "react";
export const UploadFile = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles);
  }, []);

  return (
    <Upload horizontal options={{ onDrop }} className="p-0 border-none">
      <UploadBody className="border-metal-200 border-solid py-0">
        <UploadIcon className="size-10">
          <File size={24} />
        </UploadIcon>
        <UploadText>
          <KeepHeading level="subheading">Choose File to Upload</KeepHeading>
          {/* <KeepDescription level="secondary">PDF and JPG formats</KeepDescription> */}
        </UploadText>
      </UploadBody>
      <UploadFooter isFileExists={files.length > 0}>
        <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600 dark:text-metal-300">
          <Info size={16} />
          Uploaded Files
        </p>
        <ul className="space-y-1">
          {files?.map((file: any) => (
            <li
              key={file?.name}
              className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600 dark:border-l-metal-600 dark:bg-secondary-main dark:text-metal-300 "
            >
              {file?.name}
              <Trash size={16} color="red" />
            </li>
          ))}
        </ul>
      </UploadFooter>
    </Upload>
  );
};
