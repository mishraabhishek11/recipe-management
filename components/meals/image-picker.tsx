"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ name, label }: { name: string; label: string }) => {
  const ref = useRef<HTMLInputElement>(null);

  const [pickeImage, setPickedImage] = useState<string | null>(null);
  const handleImagePick = () => ref.current?.click();

  const handlePickedImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string | null);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickeImage ? (
            <Image src={pickeImage} fill alt="image picked" />
          ) : (
            <p>No image picked yet</p>
          )}
        </div>
        <input
          className={classes.input}
          id={name}
          name={name}
          type="file"
          accept="image/png, image/jpeg"
          ref={ref}
          onChange={handlePickedImage}
          required
        />
      </div>
      <button
        type="button"
        className={classes.button}
        onClick={handleImagePick}
      >
        Pick a Image
      </button>
    </div>
  );
};

export default ImagePicker;
