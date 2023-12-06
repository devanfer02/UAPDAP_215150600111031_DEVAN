interface InputParams {
  type: string;
  placeholder: string;
  label: string;
}

export default function Input(
  { type, placeholder, label }: InputParams
) {
  return (
    <div className="my-2">
      <label 
        htmlFor=""
        className="mb-2 block text-sm font-medium"
      >
        { label }
      </label>
      <input 
        type={type}
        placeholder={placeholder} 
        className="border-2 border-my-navy rounded-lg 
        focus:ring-my-orange focus:border-my-orange 
        w-full focus:outline-none p-[0.3em]"
        required
      />
    </div>
  )
}