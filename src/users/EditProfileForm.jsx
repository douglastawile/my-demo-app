import { Button, Card, Label, TextInput } from "flowbite-react";

export default function EditProfileForm() {
  return (
    <Card className="max-w-lg my-4 shadow-sm mx-4 sm:mx-auto">
      <form>
        <h5 className="text-xl my-2 font-bold text-center text-gray-900 dark:text-white">
          Account Settings
        </h5>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <Label htmlFor="first_name" className="mb-2">
              First name
            </Label>
            <TextInput
              id="first_name"
              type="text"
              placeholder="John"
              required
            />
          </div>
          <div>
            <Label htmlFor="last_name" className="mb-2">
              Last name
            </Label>
            <TextInput id="last_name" type="text" placeholder="Doe" required />
          </div>
          <div>
            <Label htmlFor="company" className="mb-2">
              School
            </Label>
            <TextInput
              id="company"
              type="text"
              placeholder="E.g. Wenchi Model C JHS"
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" className="mb-2">
              Phone number
            </Label>
            <TextInput
              id="phone"
              type="tel"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>

          <div>
            <Label htmlFor="subjects" className="mb-2">
              Subject Taught
            </Label>
            <TextInput
              id="subjects"
              type="text"
              placeholder="E.g. Science, ICT"
              required
            />
          </div>

          <div>
            <Label htmlFor="location" className="mb-2">
              Location
            </Label>
            <TextInput
              id="location"
              type="text"
              placeholder="E.g. Kumasi"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <Label htmlFor="email" className="mb-2">
            Email address
          </Label>
          <TextInput
            id="email"
            type="email"
            placeholder="E.g. shubishon@company.com"
            required
          />
        </div>
        <Button type="submit">Save Changes</Button>
      </form>
    </Card>
  );
}
