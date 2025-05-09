import Image from "next/image";

const UserImage = () => {
  return (
    <Image
      src="/profile.png"
      alt="Yash Shrivastava"
      width={256}
      height={256}
      className="aspect-square lg:w-96 lg:h-96 mix-blend-lighten object-cover w-3/4 mx-auto rounded-full"
      unoptimized
    />
  );
};

export default UserImage;
