type LabelProps = {
  children: React.ReactNode;
  required?: boolean;
  info?: React.ReactNode; // ICON or text
  className?: string;
};

export default function Label({
  children,
  required,
  info,
  className = "",
}: LabelProps) {
  return (
    <label className={`font-medium mb-1 flex items-center gap-1 ${className}`}>
      {required && <span className="text-red-500">*</span>}
      {children}
      {info && <span className="text-blue-500">{info}</span>}
    </label>
  );
}
