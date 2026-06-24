import * as React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';

/**
 * A toggle button component to switch between light, dark, and system themes.
 * Uses next-themes and shadcn dropdown menu.
 * 
 * @returns {React.ReactElement | null} The ModeToggle component.
 */
export function ModeToggle() {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure component is mounted on the client to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled aria-label="Toggle theme">
        <SunIcon className="size-4" />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Toggle theme">
          <SunIcon className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => { setTheme('light'); }}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setTheme('dark'); }}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setTheme('system'); }}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
