'use client';

export default function Main({ children }: { children?: React.ReactNode }) {
  return <main className="container h-screen p-4">{children}</main>;
}
