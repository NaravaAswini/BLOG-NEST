export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  language: string;
  authorId: string;
  createdAt: Date;
}

export type Language = 'english' | 'telugu' | 'hindi' | 'tamil' | 'malayalam' | 'kannada';

export const LANGUAGES: { value: Language; label: string }[] = [
  { value: 'english', label: 'English' },
  { value: 'telugu', label: 'Telugu' },
  { value: 'hindi', label: 'Hindi' },
  { value: 'tamil', label: 'Tamil' },
  { value: 'malayalam', label: 'Malayalam' },
  { value: 'kannada', label: 'Kannada' },
];