import Image from "next/image";
import React from "react";

const UserImage = () => {
  return (
    <Image
      src="/profile.png"
      alt="Yash Shrivastava"
      width={256}
      height={256}
      className="object-contain w-11/12 mx-auto rounded-full aspect-square lg:w-96 lg:h-96 mix-blend-lighten"
    />
  );
};

export default UserImage;
