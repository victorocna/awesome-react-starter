import { Button } from '@components/ui/button';
import { Card } from '@components/ui/card';
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from '@components/ui/empty';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  return (
    <main className="cover flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <Card>
        <Empty>
          <EmptyHeader>
            <EmptyTitle>404 - Not Found</EmptyTitle>
            <EmptyDescription>
              The page you&apos;re looking for doesn&apos;t exist. Try searching for what you need
              below.
            </EmptyDescription>
          </EmptyHeader>

          <Button variant="link" asChild className="text-muted-foreground" size="sm">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeftIcon /> Back to Home
            </Link>
          </Button>
        </Empty>
      </Card>
    </main>
  );
};

export default Page;
