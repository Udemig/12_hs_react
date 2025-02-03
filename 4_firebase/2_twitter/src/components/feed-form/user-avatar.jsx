const UserAvatar = ({ user }) => {
  return (
    <img
      src={user.photoURL}
      alt={user.displayName}
      className="size-[35px] md:size-[45px] rounded-full"
    />
  );
};

export default UserAvatar;
