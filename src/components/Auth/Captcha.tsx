import React from "react";
import ReCAPTCHA from "@matt-block/react-recaptcha-v2";
import { CaptchaWrapper } from "../../UI";
import { CaptchaLoader } from "./CaptchaLoader";
import { Geti18nLocalStorage } from "../../i18next/localStorageGet";

type Props = {
  setCaptchaRes: (bool: boolean) => void;
  captchaRes: boolean | null;
};

export const Captcha = ({ captchaRes, setCaptchaRes }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [loadingStatus, setLoadingStatus] = React.useState(true);
  React.useEffect(() => {
    console.log(ref.current);
    if (ref.current?.children[1]) setLoadingStatus(false);
  }, [ref]);
  //в библиотеке рекаптчи реакт не работает смена языка
  const language = Geti18nLocalStorage();

  //не решена проблема, капча загружает сразу же свой враппер, только позже содержимое

  return (
    <CaptchaWrapper
      captchaRes={ref.current?.children ? captchaRes : null}
      ref={ref}
    >
      <>
        {loadingStatus && <CaptchaLoader />}
        {process.env.REACT_APP_SITE_KEY ? (
          <ReCAPTCHA
            hl={language ? language : "en"}
            siteKey={process.env.REACT_APP_SITE_KEY}
            onSuccess={() => setCaptchaRes(true)}
            onError={() => setCaptchaRes(false)}
            onExpire={() => setCaptchaRes(false)}
            theme="dark"
          />
        ) : (
          <></>
        )}
      </>
    </CaptchaWrapper>
  );
};
