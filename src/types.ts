export interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface CMSData {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  plans: Plan[];
  locations: Location[];
  testimonials: Testimonial[];
}
