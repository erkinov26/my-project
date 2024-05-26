interface InputProps {
  placeholder: string;
  type: string;
}

export default function Input({ placeholder, type }: InputProps) {
  return <input type={type} className="FormInput" placeholder={placeholder} />;
}
