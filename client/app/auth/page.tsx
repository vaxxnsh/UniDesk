'use client';
import AuthForm from '@/components/AuthForm';
import Navbar from '@/components/Navbar';

export default function AuthPage() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-[#121212] p-4">
      <AuthForm />
    </div>
  );
}