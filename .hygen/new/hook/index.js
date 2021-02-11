// See https://github.com/takefumi-yoshii/hygen-sanbox/blob/main/.hygen/new/fc/index.js

module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'hook_name',
        message:
          'What is the name of hook? (write XXX of useXXX, with PascalCase)',
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

      const { hook_name } = answers;
      const pascalToKebab = (str) => splitWords(str).join('-');
      const hook_name_kebab = `use-${pascalToKebab(hook_name)}`;
      const abs_path = `src/hooks/${hook_name_kebab}`;
      const hook_name_camel = `use${hook_name}`;
      const data_name_camel = hook_name.replace(/^.?/, (s) =>
        s.charAt(0).toLowerCase(),
      );
      const data_name_pascal = hook_name.replace(/^.?/, (s) =>
        s.charAt(0).toUpperCase(),
      );
      return {
        ...answers,
        abs_path,
        hook_name_kebab,
        hook_name_camel,
        data_name_camel,
        data_name_pascal,
      };
    });
  },
};
