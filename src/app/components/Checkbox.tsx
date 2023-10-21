type Props = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function Checkbox({ onChange, checked, label }: Props) {
  return (
    <div className="flex items-center mx-2">
      <input
        id={`checkbox-${label}`}
        type="checkbox"
        checked={checked}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={() => onChange(!checked)}
      />
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none cursor-pointer"
        onClick={() => onChange(!checked)}
      >
        {label}
      </label>
    </div>
  );
}
