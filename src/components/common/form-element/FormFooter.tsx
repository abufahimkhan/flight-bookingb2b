import Link from "next/link";

interface FormFooterProps {
  text: string;
  linkText: string;
  linkHref: string;
  forgetPassHref: string;
}

const FormFooter: React.FC<FormFooterProps> = ({
  text,
  linkText,
  linkHref,
  forgetPassHref,
}) => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="text-sm text-gray-600 flex items-center">
        <p>{text} </p>
        <Link href={linkHref}>
          <p className="font-bold ml-1">{linkText}</p>
        </Link>
      </div>
      <Link href={forgetPassHref}>
        <p className="font-bold ml-1 text-xs">Forgot Password?</p>
      </Link>
    </div>
  );
};

export default FormFooter;
