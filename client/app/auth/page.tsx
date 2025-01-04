'use client';
import AuthForm from '@/components/AuthForm';

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] p-4">
      <AuthForm 
        onSubmit={(data) => {
          console.log('Form submitted:', data);
        }} 
      />
    </div>
  );
}