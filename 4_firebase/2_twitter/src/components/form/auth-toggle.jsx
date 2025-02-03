const AuthToggle = ({ isSignUp, setIsSignUp }) => {
  return (
    <p className="mt-5 select-none">
      <span className="text-gray-500">
        {isSignUp ? "Hesabınız varsa" : "Hesabınız yoksa"}
      </span>
      <span
        className="cursor-pointer ms-2 text-blue-500 hover:underline"
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? "Giriş Yapın" : "Kaydolun"}
      </span>
    </p>
  );
};

export default AuthToggle;
