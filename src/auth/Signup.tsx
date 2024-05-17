import { Label, TextInput, Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <section className="dark:bg-slate-950 mt-2 mb-6">
      <Card className="max-w-sm shadow-sm mx-4 sm:mx-auto">
        <form className="flex flex-col gap-4">
          <h5 className="text-xl font-bold text-center text-gray-900 dark:text-white">
            Sign up to our platform
          </h5>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
            Already registered?{" "}
            <Link
              to="/auth/signin"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              login
            </Link>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="E.g. Shubishon"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="E.g. shubishon@company.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="********"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="passwordConfirm" value="Confirm password" />
            </div>
            <TextInput
              id="passwordConfirm"
              type="password"
              placeholder="********"
              required
            />
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
    </section>
  );
}

export default SignupForm;
