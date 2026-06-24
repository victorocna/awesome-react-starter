import { Layout } from '@components';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion';
import { Button } from '@components/ui/button';
import Link from 'next/link';

export default function Page() {
  return (
    <>
            <div className="flex items-center gap-4">
              <p className="text-sm">
                A vertically stacked set of interactive headings that each reveal a section of
                content.
              </p>
              <Button asChild variant="link">
                <Link target="_blank" href="https://ui.shadcn.com/docs/components/radix/accordion">
                  See Documentation
                </Link>
              </Button>
            </div>

            <Accordion type="single" collapsible defaultValue="shipping" className="max-w-lg">
              <AccordionItem value="shipping">
                <AccordionTrigger>What are your shipping options?</AccordionTrigger>
                <AccordionContent>
                  We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free
                  shipping on international orders.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="returns">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  Returns accepted within 30 days. Items must be unused and in original packaging.
                  Refunds processed within 5-7 business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="support">
                <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                <AccordionContent>
                  Reach us via email, live chat, or phone. We respond within 24 hours during
                  business days.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
  return <Layout title="Accordion">{page}</Layout>;
};
