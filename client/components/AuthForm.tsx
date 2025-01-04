import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import axios from 'axios';

interface FormData {
  name : string;
  email: string;
  password: string;
  keepSignedIn: boolean;
}

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name : '',
    password: '',
    confirmPassword: '',
    keepSignedIn: false,
  });

  const onSubmit = async (data: FormData) => {
    try {
      const url = `http://localhost:3000/auth/${isSignUp ? 'register' : 'login'}`;
      const response = await axios.post(url, data);
      console.log('Response:', response.data);
      alert(response.data.message)
    } catch (error : any) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSignUp || (isSignUp && formData.password === formData.confirmPassword)) {
      onSubmit({
        name : formData.name,
        email: formData.email,
        password: formData.password,
        keepSignedIn: formData.keepSignedIn,
      });
    } else {
      console.error('Passwords do not match');
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      name : '',
      email: '',
      password: '',
      confirmPassword: '',
      keepSignedIn: false,
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <Card className="w-full px-4 py-4 max-w-md mx-auto bg-[#1a1a1a] border-0">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-3xl font-bold text-white">
          {isSignUp ? 'Sign up' : 'Sign in'}
        </CardTitle>
        <p className="text-sm text-gray-400">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={toggleAuthMode}
            className="text-[#0066ff] hover:text-[#0052cc] focus:outline-none"
          >
            {isSignUp ? 'Sign in here' : 'Sign up here'}
          </button>
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="relative flex items-center">
              <Mail className="absolute left-3 w-5 h-5 text-gray-400 pointer-events-none" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-10 h-12 bg-[#2a2a2a] border-0 text-white placeholder:text-gray-400 focus:ring-1 focus:ring-[#0066ff]"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>
          {isSignUp && 
            <div className="space-y-2">
              <div className="relative flex items-center">
                <User className="absolute left-3 w-5 h-5 text-gray-400 pointer-events-none" />
                <Input
                  type="text"
                  placeholder="Enter your Full Name"
                  className="pl-10 h-12 bg-[#2a2a2a] border-0 text-white placeholder:text-gray-400 focus:ring-1 focus:ring-[#0066ff]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            </div>  
          }
          <div className="relative flex items-center">
            <Lock className="absolute left-3 w-5 h-5 text-gray-400 pointer-events-none" />
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder={isSignUp ? 'Enter new password' : 'Enter password'}
              className="pl-10 h-12 bg-[#2a2a2a] border-0 text-white placeholder:text-gray-400 focus:ring-1 focus:ring-[#0066ff]"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 h-9 w-9 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </Button>
          </div>
          {isSignUp && (
            <div className="relative flex items-center">
              <Lock className="absolute left-3 w-5 h-5 text-gray-400 pointer-events-none" />
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm password"
                className="pl-10 h-12 bg-[#2a2a2a] border-0 text-white placeholder:text-gray-400 focus:ring-1 focus:ring-[#0066ff]"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 h-9 w-9 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </Button>
            </div>
          )}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="keepSignedIn"
              checked={formData.keepSignedIn}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, keepSignedIn: checked as boolean })
              }
              className="border-gray-400 data-[state=checked]:bg-[#0066ff] data-[state=checked]:border-[#0066ff]"
            />
            <label htmlFor="keepSignedIn" className="text-sm font-medium text-gray-400">
              Keep me signed in
            </label>
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-[#0066ff] hover:bg-[#0052cc] text-white"
          >
            {isSignUp ? 'Sign me up' : 'Sign in'}
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
