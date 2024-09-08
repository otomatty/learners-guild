import { createSignal, createEffect } from "solid-js";
import { FormData } from "../../../types/formTypes";
import { FormGroup, Label, Input } from "../Signup.styled";

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step1 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const [name, setName] = createSignal(formData.name);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setName(target.value);
    setFormData({ ...formData, name: target.value });
  };

  createEffect(() => {
    setIsStepValid(!!name());
  });

  return (
    <FormGroup>
      <Label for="name">
        お名前 <span class="required">必須</span>
      </Label>
      <Input
        type="text"
        id="name"
        name="name"
        placeholder="お名前を入力してください"
        value={name()}
        onInput={handleChange}
        required
      />
    </FormGroup>
  );
};

export default Step1;
