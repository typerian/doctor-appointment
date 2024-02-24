import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React from "react";

interface ImageProps {
  setUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
  url: string | undefined;
}

const ImageUpload: React.FC<ImageProps> = ({ setUrl, url }) => {
  const onUpload = (result: any) => {
    if (result.event !== "success") return;
    setUrl(result.info?.secure_url);
  };
  return (
    <div className="">
      <label
        htmlFor="image"
        className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-400"
      >
        Imagen
      </label>
      <div>
        <div className="mb-4 flex items-center gap-4">
          {url && (
            <div className="relative h-[200px] w-[200px] overflow-hidden rounded-md">
              <div className="absolute right-2 top-2 z-10">
                <button
                  type="button"
                  onClick={() => {
                    setUrl("");
                  }}
                  className="text-lg transition duration-75 hover:scale-125"
                >
                  ⛔
                </button>
              </div>
              <Image fill className="object-cover" alt="" src={url} />
            </div>
          )}
        </div>
        <CldUploadWidget onUpload={onUpload} uploadPreset="cyfa0c2z">
          {({ open }) => {
            const onClick = () => {
              open();
            };

            return (
              <button type="button" onClick={onClick}>
                📤️ Sube una imagen
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
    </div>
  );
};

export default ImageUpload;
