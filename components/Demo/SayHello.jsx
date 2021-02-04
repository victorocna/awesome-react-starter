import { Button } from '..';
import { toaster } from '../../functions';

const SayHello = () => {
  const handleClick = () => {
    const hello = [
      'Bonjour',
      'Nǐ hǎo',
      'Konnichiwa',
      'Halløj',
      'Greetings',
      'Salut',
      'Namaste',
      'Goedendag',
      'Asalaam alaikum',
    ];
    toaster.success(hello[Math.floor(Math.random() * hello.length)]);
  };

  return <Button onClick={handleClick}>Say Hello 🛎</Button>;
};

export default SayHello;
