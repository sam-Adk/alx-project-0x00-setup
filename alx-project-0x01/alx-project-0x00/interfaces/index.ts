// interfaces/index.ts
export interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  styles: string; // ✅ required
}
