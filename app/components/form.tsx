import { FormEvent, useCallback, useState } from "react";

type FormProps = {
  onSignIn: (email: string, password: string) => void;
};

export default function Form(props: FormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      props.onSignIn(email, password);
    },
    [email, password]
  );

  return (
    <form
      className="w-[340px] h-fit bg-[#F6F8FA] block border rounded p-4 text-sm flex flex-col items-center"
      onSubmit={handleSubmit}
    >
      <p className="mb-2 w-full">Email address</p>
      <input
        className="inline-block w-full border rounded py-[5px] px-3 mb-4 focus:outline-blue-500"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="mb-2 w-full">Password</p>
      <input
        className="inline-block w-full border rounded mb-2 py-[5px] px-3 mb-4 focus:outline-blue-500"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full py-[5px] px-4 bg-[#1D843A] text-white font-bold rounded text-base"
        type="submit"
      >
        Sign in
      </button>
      <p className="mt-4">ylab@gmail.com</p>
      <p>1111</p>
    </form>
  );
}
