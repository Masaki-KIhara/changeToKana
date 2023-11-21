import { UseFormSetValue } from "react-hook-form";
import { FetchDataType, FormType } from "../type/FormTypes";

export const ChangeText = (setValue: UseFormSetValue<FormType>) => {
  const getTextValue = (text: string): Promise<FetchDataType> => {
    const data = {
      app_id: process.env.REACT_APP_APPLICATION_ID,
      sentence: text,
      output_type: "katakana",
    };
    return new Promise<FetchDataType>((resolve, reject) => {
      fetch(`https://labs.goo.ne.jp/api/hiragana`, {
        method: "POST",
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data: FetchDataType) => resolve(data))
        .catch((e) => reject(e));
    });
  };

  const setName = async (text: string, targetName: keyof FormType) => {
    const result = await getTextValue(text);
    setValue(targetName, result.converted);
  };

  return { setName };
};
