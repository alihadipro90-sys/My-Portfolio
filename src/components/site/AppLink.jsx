export function AppLink({
  href,
  navigate,
  children,
  className = "",
  ...props
}) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        navigate(href);
      }}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
