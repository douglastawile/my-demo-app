import { Label, Textarea, Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Comment() {
  return (
    <>
      {/** Add Comment form */}
      <Card className="shadow-lg rounded-lg my-2 max-w-lg dark:bg-slate-900">
        <form>
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required
            rows={4}
          />
          <Button className="my-2" gradientDuoTone="purpleToBlue">
            Add Comment
          </Button>
        </form>
      </Card>

      {/** Comments */}
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white my-2">
        Comments
      </h5>
      <>
        <div className="flex flex-col mb-2 max-w-2xl p-6 space-y-6 overflow-hidden rounded-xl shadow-lg dark:bg-slate-950 dark:text-gray-800">
          <div className="flex space-x-4">
            <img
              alt=""
              src="https://source.unsplash.com/100x100/?portrait"
              className="object-cover w-8 h-8 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex justify-between space-y-1">
              <Link
                rel="noopener noreferrer"
                to="/profile"
                className="text-sm font-semibold dark:text-gray-200"
              >
                Effah Richard
              </Link>
              <span className="text-xs dark:text-gray-400 ml-2">
                4 hours ago
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm dark:text-gray-600">
              Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum
              pri.
            </p>
            <i
              className="bi bi-trash3-fill float-end text-red-800"
              title="Delete Comment"
            ></i>
          </div>
        </div>
        <div className="flex flex-col mb-2 max-w-2xl p-6 space-y-6 overflow-hidden rounded-xl shadow-lg dark:bg-slate-950 dark:text-gray-800">
          <div className="flex space-x-4">
            <img
              alt=""
              src="https://source.unsplash.com/100x100/?portrait"
              className="object-cover w-8 h-8 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex justify-between space-y-1">
              <Link
                rel="noopener noreferrer"
                to="/profile"
                className="text-sm font-semibold dark:text-gray-200"
              >
                Effah Richard
              </Link>
              <span className="text-xs dark:text-gray-400 ml-2">
                4 hours ago
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm dark:text-gray-600">
              Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum
              pri.
            </p>
            <i
              className="bi bi-trash3-fill float-end text-red-800"
              title="Delete Comment"
            ></i>
          </div>
        </div>

        <div className="flex flex-col mb-2 max-w-2xl p-6 space-y-6 overflow-hidden rounded-xl shadow-lg dark:bg-slate-950 dark:text-gray-800">
          <div className="flex space-x-4">
            <img
              alt=""
              src="https://source.unsplash.com/100x100/?portrait"
              className="object-cover w-8 h-8 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex justify-between space-y-1">
              <Link
                rel="noopener noreferrer"
                to="/profile"
                className="text-sm font-semibold dark:text-gray-200"
              >
                Effah Richard
              </Link>
              <span className="text-xs dark:text-gray-400 ml-2">
                4 hours ago
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm dark:text-gray-600">
              Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum
              pri.
            </p>
            <i
              className="bi bi-trash3-fill float-end text-red-800"
              title="Delete Comment"
            ></i>
          </div>
        </div>

        <div className="flex flex-col mb-2 max-w-2xl p-6 space-y-6 overflow-hidden rounded-xl shadow-lg dark:bg-slate-950 dark:text-gray-800">
          <div className="flex space-x-4">
            <img
              alt=""
              src="https://source.unsplash.com/100x100/?portrait"
              className="object-cover w-8 h-8 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex justify-between space-y-1">
              <Link
                rel="noopener noreferrer"
                to="/profile"
                className="text-sm font-semibold dark:text-gray-200"
              >
                Effah Richard
              </Link>
              <span className="text-xs dark:text-gray-400 ml-2">
                4 hours ago
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm dark:text-gray-600">
              Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum
              pri.
            </p>
            <i
              className="bi bi-trash3-fill float-end text-red-800"
              title="Delete Comment"
            ></i>
          </div>
        </div>
      </>
    </>
  );
}
