// See https://github.com/takefumi-yoshii/hygen-sanbox/blob/main/.hygen/new/fc/index.js

module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'page_name',
        message: 'What is the name of page? (with PascalCase)',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      // REF: https://gist.github.com/JeffJacobson/3841577
      const splitWords = (s) => {
        let re,
          match,
          output = [];
        re = /([A-Za-z]?)([a-z0-9]+)/g;

        match = re.exec(s);
        while (match) {
          output.push([match[1].toLowerCase(), match[2]].join(''));
          match = re.exec(s);
        }

        return output;
      };

      const { page_name } = answers;
      const pascalToKebab = (str) => splitWords(str).join('-');
      const abs_path = `src/pages/${pascalToKebab(page_name)}`;
      return { ...answers, abs_path };
    });
  },
};
