import { createSignal } from "solid-js";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import { saveSignupResponse } from "../../firebase/firestore";
import { FormData } from "../../types/formTypes";
import {
  SignupWrapper,
  SignupInner,
  Form,
  ProgressBar,
  ProgressStep,
  ButtonGroup,
  Button,
} from "./Signup.styled";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Signup = () => {
  const [step, setStep] = createSignal(1);
  const [formData, setFormData] = createSignal<FormData>({
    name: "",
    email: "",
    phone: "",
    gender: "",
    birthdate: "",
    date: "",
    purpose: "",
    otherPurpose: "",
    theme: "",
  });
  const [isStepValid, setIsStepValid] = createSignal(false);

  const handleNext = () => {
    if (isStepValid()) {
      setStep(step() + 1);
    }
  };

  const handlePrev = () => {
    setStep(step() - 1);
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const age = calculateAge(formData().birthdate);
    try {
      await saveSignupResponse({ ...formData(), age });
      alert("申し込みが送信されました！");
    } catch (error) {
      alert("申し込みの送信中にエラーが発生しました。");
    }
  };

  const calculateAge = (birthdate: string) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <SignupWrapper>
      <SectionTitle title="参加を申し込む" />
      <SignupInner>
        <ProgressBar>
          {[...Array(8)].map((_, index) => (
            <ProgressStep
              active={step() === index + 1}
              completed={step() > index + 1}
            >
              {step() > index + 1 ? "" : index + 1}
            </ProgressStep>
          ))}
        </ProgressBar>
        <Form onSubmit={handleSubmit}>
          {step() === 1 && (
            <Step1
              formData={formData()}
              setFormData={setFormData}
              setIsStepValid={setIsStepValid}
            />
          )}
          {step() === 2 && (
            <Step2
              formData={formData()}
              setFormData={setFormData}
              setIsStepValid={setIsStepValid}
            />
          )}
          {step() === 3 && (
            <Step3
              formData={formData()}
              setFormData={setFormData}
              setIsStepValid={setIsStepValid}
            />
          )}
          {step() === 4 && (
            <Step4
              formData={formData()}
              setFormData={setFormData}
              setIsStepValid={setIsStepValid}
            />
          )}
          {step() === 5 && (
            <Step5
              formData={formData()}
              setFormData={setFormData}
              setIsStepValid={setIsStepValid}
            />
          )}
          {step() === 6 && (
            <Step6
              formData={formData()}
              setFormData={setFormData}
              setIsStepValid={setIsStepValid}
            />
          )}
          {step() === 7 && (
            <Step7
              formData={formData()}
              setFormData={setFormData}
              setIsStepValid={setIsStepValid}
            />
          )}
          {step() === 8 && (
            <Step8
              formData={formData()}
              setFormData={setFormData}
              setIsStepValid={setIsStepValid}
            />
          )}
          <ButtonGroup>
            {step() > 1 && (
              <Button type="button" onClick={handlePrev} variant="secondary">
                戻る
              </Button>
            )}
            {step() < 8 && (
              <Button
                type="button"
                onClick={handleNext}
                disabled={!isStepValid()}
              >
                次へ
              </Button>
            )}
            {step() === 8 && <Button type="submit">送信</Button>}
          </ButtonGroup>
        </Form>
      </SignupInner>
    </SignupWrapper>
  );
};

export default Signup;
