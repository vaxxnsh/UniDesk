'use client';
import AuthForm from '@/components/AuthForm';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function AuthPage() {
  return (
    <div className="h-full w-full flex items-center bg-[#f2f4f7] p-4">
      <div className='flex h-full bg-gray-500 items-center justify-start w-[45%]'>
          <h1 className='text-[60px] font-bold w-full text-center'>Business Room</h1>
      </div>
      
      <div className='flex items-center justify-center relative w-[55%] h-full'>
        <AuthForm />
      </div>
    </div>
  );
}