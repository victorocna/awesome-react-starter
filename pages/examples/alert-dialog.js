import { Layout } from '@components';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@components/ui/alert-dialog';
import { Button } from '@components/ui/button';
import { CircleFadingPlusIcon, Trash2Icon } from 'lucide-react';
import Link from 'next/link';

function AlertDialogBasic() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function AlertDialogWithMedia() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Share Project</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <CircleFadingPlusIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Share this project?</AlertDialogTitle>
          <AlertDialogDescription>
            Anyone with the link will be able to view and edit this project.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Share</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function AlertDialogDestructive() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Chat</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete chat?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete this chat conversation. View <a href="#">Settings</a>{' '}
            delete any memories saved during this chat.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function Page() {
  return (
    <>
            <div className="flex items-center gap-4">
              <p className="text-sm">
                A modal dialog that interrupts the user with important content and expects a
                response.
              </p>
              <Button asChild variant="link">
                <Link
                  target="_blank"
                  href="https://ui.shadcn.com/docs/components/radix/alert-dialog"
                >
                  See Documentation
                </Link>
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <p>
                A basic alert dialog with a title, description, and cancel and continue buttons.
              </p>
              <AlertDialogBasic />
            </div>

            <div className="flex flex-col gap-2">
              <p>
                Use the AlertDialogMedia component to add a media element such as an icon or image
                to the alert dialog.
              </p>
              <AlertDialogWithMedia />
            </div>

            <div className="flex flex-col gap-2">
              <p>
                Use the AlertDialogAction component to add a destructive action button to the alert
                dialog.
              </p>
              <AlertDialogDestructive />
            </div>
          </>
  );
}


/**
 * Attaches the default layout to the page.
 *
 * @param {React.ReactNode} page - The page content.
 * @returns {React.ReactElement} The layout wrapper.
 */
Page.getLayout = function getLayout(page) {
  return <Layout title="Alert Dialog">{page}</Layout>;
};
