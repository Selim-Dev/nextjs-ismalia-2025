'use client';

export default function Card({ children,title, color = 'bg-white' }) {
  return (
    <div
      className={`w-full min-h-[100px] m-2   rounded flex items-center justify-center text-xl font-semibold text-black `}
    >
      {children}
    </div>
  );
}
