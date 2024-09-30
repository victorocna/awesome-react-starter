module.exports = {
  sitename: 'Your Awesome App',
  title: 'Your Awesome App',
  description: `
  Starter template for React and Next.js projects packed with features like authentication,
  custom hooks, Tailwind support and many more.
  `,
  baseurl: `${process.env.APP_BASE_URL}`,
  image: `${process.env.APP_BASE_URL}/images/logo.png`,
  stylesheets: [
    `https://kit.fontawesome.com/${process.env.FONT_AWESOME_KEY}.css`,
    'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
  ],
  scripts: [
    // eg: tracking scripts
  ],
  languages: [
    'en', // add any other languages here
    'ro',
  ],
};
