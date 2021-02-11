// See https://github.com/takefumi-yoshii/hygen-sanbox/blob/main/.hygen/new/fc/index.js

module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which Atomic Design category?',
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the name of component?',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory? (No problem in blank)',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { category, component_name, dir } = answers;
      const path = `${category}/${dir ? `${dir}/` : ``}${component_name}`;
      const abs_path = `src/components/${path}`;
      const tag = args.tag ? args.tag : 'div';
      return { ...answers, path, abs_path, tag };
    });
  },
};
