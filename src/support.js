export const springy = [
  0, 0.0701, 0.2329, 0.4308, 0.6245, 0.7906, 0.9184, 1.0065, 1.059, 1.0833,
  1.0872, 1.0783, 1.0628, 1.0453, 1.0288, 1.015, 1.0048, 0.9979, 0.994, 0.9925,
  0.9925, 0.9935, 0.9949, 0.9964, 0.9978, 0.999, 0.9998,
];

export const onFrames = (animate) => {
  const { animatingProperties: props, frames } = animate;
  if (frames === undefined || props === undefined) {
    return frames;
  }
  return [
    frames[0],
    ...springy.map((v) => {
      const frame = {};
      const x = props.left ? `translateX(${props.left * (1 - v)}px)` : '';
      const y = props.top ? `translateY(${props.top * (1 - v)}px)` : '';
      const sx = props.width
        ? `scaleX(${props.width + (1 - props.width) * v})`
        : '';
      const sy = props.height
        ? `scaleY(${props.height + (1 - props.height) * v})`
        : '';
      frame.transform = `${x} ${y} ${sx} ${sy}`;
      return frame;
    }),
    frames[1],
  ];
};

export const data = [
  {
    id: 0,
    value: 'Vite Lit',
    summary: 'Test drive vite lit html.',
    content:
      'Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.Test drive vite lit html.',
    image:
      'https://1.bp.blogspot.com/-KdOmgew5AAY/YLd5K6bxNvI/AAAAAAAAObs/470DMPEoFTEOiUz8sypDkUiHaDT0qqdcQCLcBGAsYHQ/s2048/14188290_10207230576463669_4891828439591670232_o.jpg',
  },
  {
    id: 1,
    value: 'Blogspot',
    summary: 'Blogger totalist.',
    content:
      'Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist Blogspot blogger totalist .',
    image:
      'https://1.bp.blogspot.com/-CouWGZ6LqZY/YLd5NDo2J0I/AAAAAAAAOcE/XkRUIl6UjrArobrq57Wd9_jGdfzV_KdeQCLcBGAsYHQ/s2048/15025293_10207781747962612_1865020663178979881_o.jpg',
  },
  {
    id: 2,
    value: 'Eleventy',
    summary: 'Powerfull SEO with eleventy.',
    content:
      'Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok',
    image:
      'https://1.bp.blogspot.com/-QZrkVkQRNkg/YLd5OR6zeNI/AAAAAAAAOcU/LLPcw6EoOwgrtiDe1eABpb6LU0qo0L91QCLcBGAsYHQ/s2048/27747826_10211422624982262_1056869908644083205_o.jpg',
  },
  {
    id: 3,
    value: 'Gatsby JS',
    summary: 'Powerfull with gatsby js',
    content:
      'Gatsby JS Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedokLorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok',
    image:
      'https://1.bp.blogspot.com/-4phryoUbNcE/YLd5PbOtQ_I/AAAAAAAAOcg/TCkYTXRxo6I9a5J2LzE5kUhreH7XS3IjgCLcBGAsYHQ/s2048/43490690_10213210978689987_659090554369343488_n.jpg',
  },
  {
    id: 4,
    value: 'Angular',
    summary: 'Angular the puyeng of duyeng.',
    content:
      'Angular is a Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedokLorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedokLorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedokLorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok.',
    image:
      'https://1.bp.blogspot.com/-d06jQ5JyjNo/YLd5PjmjUQI/AAAAAAAAOck/J63y3BXlWMwNPNPEo9xuH6s_NzloI0ejgCLcBGAsYHQ/s2048/46266456_10213340392965263_8094537258599710720_n.jpg',
  },
  {
    id: 5,
    value: 'Jekyll',
    summary: 'Wow banget with jekyll rb.',
    content:
      'Jekyll is Lorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedokLorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedokLorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedokLorep ipsum amet amet jabang bayi lanang wedok Lorep ipsum amet amet jabang bayi lanang wedok.',
    image:
      'https://1.bp.blogspot.com/-iq0nb9Jh5FI/YLdyCoiLwkI/AAAAAAAAOaE/h9lXDY8w4zIA9qQwNajXFxD1MWc5Fr3rwCLcBGAsYHQ/s960/14184389_10207226846050411_1975569787570828073_n.jpg',
  },
];
