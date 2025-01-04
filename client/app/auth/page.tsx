'use client';
import AuthForm from '@/components/AuthForm';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function AuthPage() {
  return (
    <div className="h-full w-full flex items-center bg-[#f2f4f7] p-4">
      <div className='flex items-center justify-center w-[45%]'>
          <Image src={`/images/Logo-Dummy.jpg`} width={500} height={500} alt='Logo'/>
      </div>
      
      <div className='flex items-center justify-center relative w-[55%] h-full'>
        <AuthForm />
      </div>
    </div>
  );
}