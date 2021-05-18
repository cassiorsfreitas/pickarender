const questions = [
  {
    id: 1,
    text: 'What level of interaction is expected with the user?',
    answers: [
      {
        ans: 'I want to make a very informative website, with little or no user interactivity.',
        value: 'SSG',
      },
      {
        ans: `I don't know it yet.`,
        value: 'SPA',
      },
      {
        ans: 'High interaction. But I need to improve its initial load.',
        value: 'SSR',
      },
    ],
    selected: '',
  },
  {
    id: 2,
    text: 'Will the site have private/authenticated content?',
    answers: [
      {
        ans: 'No, at first.',
        value: 'SSG',
      },
      {
        ans: 'Yes. I think the information for each user will be different.',
        value: 'SPA',
      },
      {
        ans: 'Sure. Private routes, authentication, control panel, dashboards, reports and a coffee machine.',
        value: 'SSR',
      },
    ],
    selected: '',
  },
  {
    id: 3,
    text: 'Is performance extremely important for the site?',
    answers: [
      {
        ans: 'Yes. Web performance matters a lot to me.',
        value: 'SSG',
      },
      {
        ans: 'No. The user can wait a little bit.',
        value: 'SPA',
      },
      {
        ans: 'Is important. But not too much.',
        value: 'SSR',
      },
    ],
    selected: '',
  },
  {
    id: 4,
    text: 'Is finding by search engines fundamental? (like Google)',
    answers: [
      {
        ans: 'Yes, all parts of the site',
        value: 'SSG',
      },
      {
        ans: 'No. I have other marketing strategies.',
        value: 'SPA',
      },
      {
        ans: 'Yes, but only a few specific parts.',
        value: 'SSR',
      },
    ],
    selected: '',
  },
  {
    id: 5,
    text: 'Does the website content update constantly? (like an ecommerce)',
    answers: [
      {
        ans: `The content won't change much`,
        value: 'SSG',
      },
      {
        ans: 'Yes, constantly. But like a Blog.',
        value: 'SPA',
      },
      {
        ans: 'Yes, everyday and all the time.',
        value: 'SSR',
      },
    ],
    selected: '',
  },
  {
    id: 6,
    text: 'Will the code be shared with the backend?',
    answers: [
      {
        ans: `No, the content is static.`,
        value: 'SSG',
      },
      {
        ans: 'Maybe.',
        value: 'SPA',
      },
      {
        ans: 'Yes, at least Node will be used.',
        value: 'SSR',
      },
    ],
    selected: '',
  },
];

export default questions;
