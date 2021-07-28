module.exports = {
  sitename: 'Your awesome site',
  title: 'Your awesome site',
  description: 'Lorem ipsum dolor sin amet',
  baseurl: `${process.env.APP_BASE_URL}`,
  image: `${process.env.APP_BASE_URL}/images/logo.png`,
  stylesheets: [
    'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500',
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css',
  ],
  scripts: [
    // eg: tracking scripts
  ],
};
