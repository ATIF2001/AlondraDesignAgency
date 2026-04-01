export function CartoonButton({
  label,
  color = "bg-orange-400",
  hasHighlight = true,
  disabled = false,
  onClick,
  className = "",
  buttonClassName = "",
  textClassName = "text-neutral-800",
  borderClassName = "border-neutral-800",
  hoverShadow = "#262626",
  icon: Icon,
  trailingIcon: TrailingIcon,
  iconOnly = false,
  iconClassName = "",
  trailingIconClassName = "",
  type = "button",
  ariaLabel,
}) {
  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  return (
    <div
      className={`inline-block ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${className}`}
    >
      <button
        type={type}
        disabled={disabled}
        onClick={handleClick}
        aria-label={ariaLabel ?? label}
        className={`group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full border-2 px-6 text-xl font-bold transition-all duration-150 ${textClassName} ${borderClassName} ${color} ${
          disabled
            ? "pointer-events-none opacity-50"
            : "hover:-translate-y-1 active:translate-y-0"
        } ${iconOnly ? "w-12 px-0" : ""} ${buttonClassName}`}
        style={{
          boxShadow: disabled ? "none" : `0 0 0 0 ${hoverShadow}`,
        }}
        onMouseEnter={(event) => {
          if (!disabled) {
            event.currentTarget.style.boxShadow = `0 4px 0 0 ${hoverShadow}`;
          }
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.boxShadow = "0 0 0 0 transparent";
        }}
        onMouseDown={(event) => {
          if (!disabled) {
            event.currentTarget.style.boxShadow = "0 0 0 0 transparent";
          }
        }}
        onMouseUp={(event) => {
          if (!disabled) {
            event.currentTarget.style.boxShadow = `0 4px 0 0 ${hoverShadow}`;
          }
        }}
      >
        {Icon ? <Icon className={`relative z-10 h-5 w-5 ${iconClassName}`} /> : null}
        {!iconOnly ? <span className="relative z-10 whitespace-nowrap">{label}</span> : null}
        {TrailingIcon ? (
          <TrailingIcon className={`relative z-10 h-5 w-5 ${trailingIconClassName}`} />
        ) : null}
        {hasHighlight && !disabled ? (
          <div className="absolute top-1/2 left-[-100%] h-24 w-16 -translate-y-1/2 rotate-12 bg-white/50 transition-all duration-500 ease-in-out group-hover:left-[200%]" />
        ) : null}
      </button>
    </div>
  );
}
