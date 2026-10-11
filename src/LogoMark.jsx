export default function LogoMark({ className }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}oldtabber-logo.png`}
      alt=""
      width={160}
      height={160}
      className={className}
      decoding="async"
    />
  );
}
