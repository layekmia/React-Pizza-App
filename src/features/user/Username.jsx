import { useSelector } from "react-redux";

export default function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return;
  return (
    <div className="hidden md:block">
      <p className="text-sm font-bold">{username}</p>
    </div>
  );
}
