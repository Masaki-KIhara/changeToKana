import { FormProvider, useForm } from "react-hook-form";
import { Form } from "./components/template/Form";
import { FormType } from "./type/FormTypes";

function App() {
  const methods = useForm<FormType>();
  return (
    <FormProvider {...methods}>
      <Form />
    </FormProvider>
  );
}

export default App;
