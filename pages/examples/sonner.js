import { Layout } from '@components';
import { Button } from '@components/ui/button';
import Link from 'next/link';
import { toast } from 'sonner';

/**
 * Simulates a promise that resolves after a specified delay.
 *
 * @returns {Promise<{ name: string }>} A promise that resolves to an object with a name property.
 */
const mockPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 50% chance of success, 50% chance of failure for simulation purposes
      if (Math.random() > 0.5) {
        resolve({ name: 'Project' });
      } else {
        reject(new Error('Failed to deploy'));
      }
    }, 2000);
  });
};

/**
 * Examples page displaying interactive Sonner toast notifications in various states, positions, and formats.
 *
 * @returns {React.ReactNode} The rendered page component.
 */
export default function Page() {
  const triggerPromiseToast = () => {
    toast.promise(mockPromise(), {
      loading: 'Deploying project...',
      success: (data) => {
        return `${data.name} deployed successfully!`;
      },
      error: (err) => {
        return err.message || 'Deployment failed';
      },
    });
  };

  return (
    <>
            {/* Header info */}
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Sonner</h2>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  An opinionated toast notification component for React.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/sonner">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Examples Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              {/* Card: Types of Toasts */}
              <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold text-lg leading-none tracking-tight">Toast Types</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sonner supports multiple status states out of the box.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      toast('Event has been created.');
                    }}
                  >
                    Default
                  </Button>
                  <Button
                    variant="outline"
                    className="text-green-600 dark:text-green-400 border-green-200 dark:border-green-900 hover:bg-green-50 dark:hover:bg-green-950"
                    onClick={() => {
                      toast.success('Project saved successfully.');
                    }}
                  >
                    Success
                  </Button>
                  <Button
                    variant="outline"
                    className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900 hover:bg-blue-50 dark:hover:bg-blue-950"
                    onClick={() => {
                      toast.info('New updates are ready to install.');
                    }}
                  >
                    Info
                  </Button>
                  <Button
                    variant="outline"
                    className="text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-900 hover:bg-yellow-50 dark:hover:bg-yellow-950"
                    onClick={() => {
                      toast.warning('Warning: Storage limit is reaching 90%.');
                    }}
                  >
                    Warning
                  </Button>
                  <Button
                    variant="outline"
                    className="text-destructive border-destructive/20 hover:bg-destructive/10"
                    onClick={() => {
                      toast.error('Could not authenticate session.');
                    }}
                  >
                    Error
                  </Button>
                  <Button variant="outline" onClick={triggerPromiseToast}>
                    Promise / Async
                  </Button>
                </div>
              </div>

              {/* Card: Toast with Description & Actions */}
              <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold text-lg leading-none tracking-tight">
                    Descriptions & Actions
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Toasts can display custom descriptions and action triggers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <Button
                    variant="outline"
                    className="justify-start px-4"
                    onClick={() => {
                      toast('Notification Received', {
                        description: 'Sunday, December 03, 2023 at 9:00 AM',
                      });
                    }}
                  >
                    <span className="flex flex-col items-start">
                      <span>Show with Description</span>
                      <span className="text-[10px] text-muted-foreground font-normal">
                        Adds a subtitle description
                      </span>
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start px-4"
                    onClick={() => {
                      toast('Document Deleted', {
                        description: 'Deleted document has been moved to Trash.',
                        action: {
                          label: 'Undo',
                          onClick: () => {
                            toast.success('Restored document!');
                          },
                        },
                      });
                    }}
                  >
                    <span className="flex flex-col items-start">
                      <span>Show with Action Button</span>
                      <span className="text-[10px] text-muted-foreground font-normal">
                        Adds an interactive click action
                      </span>
                    </span>
                  </Button>
                </div>
              </div>

              {/* Card: Positions */}
              <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm flex flex-col gap-4 md:col-span-2">
                <div>
                  <h3 className="font-semibold text-lg leading-none tracking-tight">
                    Toast Position
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Override the display location of the toast notifications dynamically.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      toast('Position: Top Left', { position: 'top-left' });
                    }}
                  >
                    Top Left
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      toast('Position: Top Center', { position: 'top-center' });
                    }}
                  >
                    Top Center
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      toast('Position: Top Right', { position: 'top-right' });
                    }}
                  >
                    Top Right
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      toast('Position: Bottom Left', { position: 'bottom-left' });
                    }}
                  >
                    Bottom Left
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      toast('Position: Bottom Center', { position: 'bottom-center' });
                    }}
                  >
                    Bottom Center
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      toast('Position: Bottom Right', { position: 'bottom-right' });
                    }}
                  >
                    Bottom Right
                  </Button>
                </div>
              </div>
            </div>
          </>
  );
}

/**
 * Restricts this page to development/non-production build environments.
 *
 * @returns {Promise<Object>} Next.js static props or notFound page.
 */
export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}


/**
 * Attaches the default layout to the page.
 *
 * @param {React.ReactNode} page - The page content.
 * @returns {React.ReactElement} The layout wrapper.
 */
Page.getLayout = function getLayout(page) {
  return <Layout title="Sonner Toasts">{page}</Layout>;
};
