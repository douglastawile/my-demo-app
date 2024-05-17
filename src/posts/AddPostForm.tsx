"use client";

import {
  Label,
  TextInput,
  Textarea,
  Card,
  Button,
  FileInput,
} from "flowbite-react";

export default function AddPostForm() {
  return (
    <Card className="shadow-lg rounded-lg my-4 max-w-lg mx-4 sm:mx-auto dark:bg-slate-900">
      <p className="text-xs font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Tell us why you would leave the teaching field to join a different
        profession.
      </p>

      <div className="flex max-w-md flex-col gap-4">
        <form action="">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="title"
                className="dark:text-gray-400"
                value="Title"
              />
            </div>
            <TextInput
              id="title"
              placeholder="Add post title"
              required
              color="gray"
            />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="content" value="Content" />
            </div>
            <Textarea
              id="content"
              placeholder="Tell us what's on your mind..."
              required
              rows={4}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="file-upload" value="Upload file" />
            </div>
            <FileInput id="file-upload" />
          </div>
          <Button className="my-2" gradientDuoTone="purpleToBlue">
            Save Post
          </Button>
        </form>
      </div>
    </Card>
  );
}
