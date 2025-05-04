import { Link } from "react-router";

export default function Button({ children, disabled, to, type, onClick, }) {
  const base =
    "inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-400 focus:ring-offset-2";

  const styles = {
    primary: base + " px-4 py-3",
    small: base + " px-4 py-2 text-xs",
    secondary:
      "inline-block rounded-full border-2 border-stone-300 px-4 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300",
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm'
  };

  if (to)
    return (
      <Link onClick={onClick} className={styles[type]} to={to}>
        {children}
      </Link>
    );

    

  return (
    <button onClick={onClick} className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
