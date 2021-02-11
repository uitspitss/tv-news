// See https://github.com/takefumi-yoshii/hygen-sanbox/blob/main/.hygen/new/fc/index.js

module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'function_name',
        message: 'What is the name of function? (with camelCase)',
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

      const { function_name } = answers;
      const camelToKebab = (str) => splitWords(str).join('-');
      const abs_path = `src/utils/${camelToKebab(function_name)}`;
      return { ...answers, abs_path };
    });
  },
};
