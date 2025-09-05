export interface Service {
  icon: string;
  color: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export interface Review {
  stars: string;
  text: string;
  authorInitials: string;
  authorName: string;
  verified: string;
}

export interface ContactInfo {
  icon: string;
  iconBg: string;
  title: string;
  content: React.ReactNode;
}

export interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}