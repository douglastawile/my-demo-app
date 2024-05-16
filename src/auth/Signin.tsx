import { Label, TextInput, Checkbox, Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

function SigninForm() {
  return (
    <Card className="max-w-sm my-4 shadow-sm mx-4 sm:mx-auto">
      <form className="flex flex-col gap-4">
        <h5 className="text-xl text-center font-bold text-gray-900 dark:text-white">
          Sign in to our platform
        </h5>
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
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <Link
            to="/auth/signup"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Create account
          </Link>
        </div>
      </form>
    </Card>
  );
}

export default SigninForm;
