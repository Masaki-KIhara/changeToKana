import { useEffect } from "react";
import { SubmitHandler, useFormContext, useWatch } from "react-hook-form";
import { ChangeText } from "../../handler/ChangeText";
import { FormType } from "../../type/FormTypes";
import { InputForm } from "../molcule/InputForm";

export const Form = () => {
  const { handleSubmit, control, setValue } = useFormContext<FormType>();
  const { setName } = ChangeText(setValue);
  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);

  const firstNameValue = useWatch({ control, name: "firstName" });
  const lastNameValue = useWatch({ control, name: "lastName" });

  useEffect(() => {
    if (!firstNameValue) return;
    setName(firstNameValue, "firstNameKana");
  }, [firstNameValue]);

  useEffect(() => {
    if (!lastNameValue) return;
    setName(lastNameValue, "lastNameKana");
  }, [lastNameValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid justify-center gap-10 pt-10"
    >
      <InputForm
        firstName={{
          name: "firstName",
        }}
        lastName={{
          name: "lastName",
        }}
      />
      <InputForm
        firstName={{
          name: "firstNameKana",
        }}
        lastName={{
          name: "lastNameKana",
        }}
      />
      <button type="submit" className="border p-[5px] w-[80px] brock mx-auto">
        送信
      </button>
    </form>
  );
};
