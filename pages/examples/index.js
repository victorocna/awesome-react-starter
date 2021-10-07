import { Menu, Tooltip, MenuButton } from '../../components';
import { SayGoodbye, SayHello } from '../../examples/components';

const Page = () => {
  return (
    <div className="font-body text-sm min-h-screen bg-gray-100 flex">
      <Menu />
      <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12">
        <div className="flex items-center mb-12">
          <div className="flex flex-1">
            <h3 className="text-2xl font-semibold">Dashboard</h3>
            <Tooltip placement="bottom">Just another tooltip</Tooltip>
          </div>
          <MenuButton />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded shadow p-4 grid gap-4">
            <p className="text-gray-800">
              Bacon ipsum dolor amet brisket jowl burgdoggen, sausage capicola ground round chicken
              tail boudin porchetta landjaeger turducken turkey shoulder short ribs. Ham meatloaf
              tri-tip jowl pancetta strip steak chislic, chicken drumstick venison short loin bacon
              pork loin. Buffalo capicola jowl short loin turkey porchetta picanha kevin leberkas
              pastrami strip steak. Filet mignon spare ribs pork chop pork loin, alcatra boudin
              shoulder. Kielbasa shankle ribeye t-bone short ribs, tail porchetta bresaola. Kielbasa
              chuck beef ribs pig alcatra doner shoulder.
            </p>
            <p className="text-gray-800">
              Strip steak ground round cupim, shoulder kielbasa burgdoggen spare ribs pork belly
              pork loin filet mignon pastrami. Beef buffalo jowl, picanha pancetta tail corned beef
              brisket. Landjaeger jerky short ribs capicola frankfurter kielbasa. Tri-tip capicola
              ball tip flank, bresaola beef ribs buffalo tongue strip steak andouille bacon shoulder
              turducken short loin.
            </p>
            <p className="text-gray-800">
              Landjaeger flank pork chop, drumstick capicola pig meatball beef buffalo. Ball tip
              leberkas kevin filet mignon, tail venison ham ribeye kielbasa bacon prosciutto tri-tip
              shank. Buffalo shank alcatra drumstick flank, tri-tip biltong shoulder cupim fatback
              pancetta ball tip andouille short loin. Beef ribs sirloin bresaola ham hock, ball tip
              kielbasa ribeye swine t-bone cupim turkey kevin chicken. Spare ribs beef venison
              prosciutto pork loin tongue andouille pancetta filet mignon.
            </p>
            <div>
              <SayHello />
            </div>
          </div>
          <div className="bg-white rounded shadow p-4 grid gap-4">
            <p className="text-gray-800">
              Bacon ipsum dolor amet shank rump kevin fatback, corned beef short loin salami. Beef
              hamburger pork sirloin corned beef burgdoggen. Beef ground round meatloaf tail filet
              mignon chislic, sausage short ribs. Spare ribs salami sirloin andouille tongue corned
              beef. Prosciutto beef ribeye kevin. Venison pork ham ribeye chislic, meatloaf ball tip
              shoulder. Corned beef beef sausage leberkas, pork belly buffalo tenderloin doner ham
              hock.
            </p>
            <p className="text-gray-800">
              Spare ribs chicken swine, porchetta cow salami cupim pancetta drumstick pork chop.
              Bresaola ground round bacon beef sirloin leberkas buffalo salami boudin andouille
              kevin strip steak meatloaf ball tip corned beef. Cow spare ribs flank pastrami.
              Tenderloin short loin salami, short ribs shoulder bacon doner pork turducken kielbasa
              pork loin ham. Shankle pancetta short ribs tri-tip landjaeger. Biltong pork loin cow
              ham hock cupim pork short ribs chuck ribeye shankle rump beef.
            </p>
            <p className="text-gray-800">
              Pig turducken tongue, kevin tail short loin meatball pork capicola leberkas venison
              alcatra ground round doner. Porchetta tongue salami beef strip steak. Pancetta rump
              shankle t-bone, swine frankfurter drumstick. Rump alcatra pork t-bone turkey chuck.
              Flank jowl chuck, chislic ham hamburger andouille spare ribs corned beef bacon shank.
              Andouille brisket corned beef ham beef, chicken salami doner. Tail meatball picanha
              rump, pork loin kevin bresaola strip steak salami.
            </p>
            <div>
              <SayGoodbye />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  // hide page on production environments
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

export default Page;
