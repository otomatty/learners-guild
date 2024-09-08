import { createSignal, createEffect } from "solid-js";
import { FormData } from "../../../types/formTypes";
import { FormGroup, Label, TextArea } from "../Signup.styled";

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step8 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const [theme, setTheme] = createSignal(formData.theme);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    setTheme(target.value);
    setFormData({ ...formData, theme: target.value });
  };

  createEffect(() => {
    setIsStepValid(true); // 任意項目なので常に有効
  });

  return (
    <FormGroup>
      <Label for="theme">
        取り組みたいテーマ <span class="optional">任意</span>
      </Label>
      <TextArea
        id="theme"
        name="theme"
        rows="3"
        placeholder="取り組みたいテーマを入力してください"
        value={theme()}
        onInput={handleChange}
      />
    </FormGroup>
  );
};

export default Step8;
