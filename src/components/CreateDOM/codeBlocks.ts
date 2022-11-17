export const sampleUsage = `createDom({
  type: 'input',
  attributes: {
    class: 'my-input',
    type: 'password',
    placeholder: 'type your password',
  },
}); // <input class="my-input" type="password" placeholder="type your password" />

createDom({
  type: 'p',
  children: [
    'Hello ',
    {
      type: 'strong',
      children: ['World']
    },
  ]
}); // <p>Hello <strong>World</strong></p>`;

export const solutionCode = `function createDom (root) {
  const rootNode = createNode(root);
  const children = root?.children ?? [];

  for (let child of children) {
    rootNode.append(createDom(child));
  }

  return rootNode;
}

function createNode (node, attributes) {
  const newNode = typeof node === 'string'
    ? document.createTextNode(node)
    : document.createElement(node.type);

  if (node?.attributes) {
    Object.entries(node.attributes).forEach(([attribute, value]) => {
      newNode.setAttribute(attribute, value);
    });
  }

  return newNode;
}`;
