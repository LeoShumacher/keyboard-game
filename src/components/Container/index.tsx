interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="">
      <div
        className="w-full h-full gap-2 flex flex-col items-center sm:w-96 sm:h-96 sm:rounded-xl sm:backdrop-blur-md sm:bg-white/30 sm:shadow-xl
      text-secondary"
      >
        {children}
      </div>
    </div>
  );
}
