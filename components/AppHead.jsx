const AppHead = ({ title, description, googleFonts, fontAwesome }) => (
  <>
    {title && <title>{title}</title>}
    {description && <meta name="description" content={description} />}
    {googleFonts && <link rel="stylesheet" href={googleFonts} />}
    {fontAwesome && <link rel="stylesheet" href={fontAwesome} />}
  </>
);

export default AppHead;
