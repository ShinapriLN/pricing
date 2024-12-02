export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 flex justify-center items-center rounded-full bg-[#263FA9] text-white">
      {children}
    </div>
  );
}
