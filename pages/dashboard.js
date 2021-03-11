import { Menu, Tooltip } from '../components';

const Page = () => (
  <div className="font-body text-sm min-h-screen bg-gray-100 flex">
    <Menu />
    <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12 space-y-4">
      <div className="flex items-center mb-12">
        <h3 className="text-2xl font-semibold">Dashboard</h3>
        <Tooltip placement="auto-start">Just another tooltip</Tooltip>
      </div>
      <div className="bg-white rounded shadow p-4 space-y-4">
        <p className="text-gray-800">
          Bacon ipsum dolor amet brisket jowl burgdoggen, sausage capicola ground round chicken tail
          boudin porchetta landjaeger turducken turkey shoulder short ribs. Ham meatloaf tri-tip
          jowl pancetta strip steak chislic, chicken drumstick venison short loin bacon pork loin.
          Buffalo capicola jowl short loin turkey porchetta picanha kevin leberkas pastrami strip
          steak. Filet mignon spare ribs pork chop pork loin, alcatra boudin shoulder. Kielbasa
          shankle ribeye t-bone short ribs, tail porchetta bresaola. Kielbasa chuck beef ribs pig
          alcatra doner shoulder.
        </p>
        <p className="text-gray-800">
          Strip steak ground round cupim, shoulder kielbasa burgdoggen spare ribs pork belly pork
          loin filet mignon pastrami. Beef buffalo jowl, picanha pancetta tail corned beef brisket.
          Landjaeger jerky short ribs capicola frankfurter kielbasa. Tri-tip capicola ball tip
          flank, bresaola beef ribs buffalo tongue strip steak andouille bacon shoulder turducken
          short loin.
        </p>
        <p className="text-gray-800">
          Landjaeger flank pork chop, drumstick capicola pig meatball beef buffalo. Ball tip
          leberkas kevin filet mignon, tail venison ham ribeye kielbasa bacon prosciutto tri-tip
          shank. Buffalo shank alcatra drumstick flank, tri-tip biltong shoulder cupim fatback
          pancetta ball tip andouille short loin. Beef ribs sirloin bresaola ham hock, ball tip
          kielbasa ribeye swine t-bone cupim turkey kevin chicken. Spare ribs beef venison
          prosciutto pork loin tongue andouille pancetta filet mignon.
        </p>
      </div>
    </main>
  </div>
);

export default Page;
