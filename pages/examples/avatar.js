import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarGroupCount } from '@components/ui/avatar';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Avatar</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  An image element with a fallback for representing the user.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/avatar">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground">Default & Size Lg</span>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar size="lg">
                    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground">Avatar Group</span>
                <AvatarGroup>
                  <Avatar size="sm"><AvatarFallback>A</AvatarFallback></Avatar>
                  <Avatar size="sm"><AvatarFallback>B</AvatarFallback></Avatar>
                  <Avatar size="sm"><AvatarFallback>C</AvatarFallback></Avatar>
                  <AvatarGroupCount />
                </AvatarGroup>
              </div>
            </div>
    
            </div>
          </>
  );
}

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
  return <Layout title="Avatar">{page}</Layout>;
};
