import { Button } from '../../components';
import { toaster } from '../../lib';

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

  return (
    <Button className="button full secondary" onClick={handleClick}>
      Say Hello
    </Button>
  );
};

export default SayHello;
