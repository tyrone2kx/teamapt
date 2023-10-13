
export const Icon = ({
    name,
    className = "",
    iconClassName = "",
  }: {
    name: string;
    className?: string;
    iconClassName?: string;
  }) => {
    return (
      <div
        className={`bg-orange-600 rounded-full w-[40px] h-[40px] flex items-center justify-center ${className}`}
      >
        <i className={`${name} text-white text-lg ${iconClassName}`}></i>
      </div>
    );
  };