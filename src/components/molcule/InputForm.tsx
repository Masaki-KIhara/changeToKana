import { useFormContext } from "react-hook-form";

type Props = {
  firstName: {
    name: string;
  };
  lastName: {
    name: string;
  };
};

export const InputForm = ({ firstName, lastName }: Props) => {
  const { register } = useFormContext();
  return (
    <label className="flex gap-[10px]">
      {firstName.name === "firstName" ? "氏名（漢字）" : "氏名（カナ）"}
      <input
        {...register(lastName.name)}
        className="border"
        placeholder={firstName.name === "firstName" ? "名" : "メイ"}
      />
      <input
        {...register(firstName.name)}
        className="border"
        placeholder={lastName.name === "lastName" ? "姓" : "セイ"}
      />
    </label>
  );
};
