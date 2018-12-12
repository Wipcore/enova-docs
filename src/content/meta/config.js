const base = {
  name: 'Wipcore',
  url: 'https://github.com/greglobinski/gatsby-starter-kit'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - experter på e-handel sen 1997`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } - din e-handelsmotor från Wipcore`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'experter på e-handel sen 1997',

  /* url */
  siteUrl: base.url
  // pathPrefix: '',
};

module.exports = config;
