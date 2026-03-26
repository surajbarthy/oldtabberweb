export default function LogoMark({ className = "h-10 w-10" }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}oldtabber-logo.png`}
      alt=""
      width={160}
      height={160}
      className={`shrink-0 rounded-lg object-contain ${className}`}
      decoding="async"
    />
  );
}
