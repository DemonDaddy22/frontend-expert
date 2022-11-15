export const sampleUsage = `const dom1 = document.createElement('div');
dom1.innerHTML = "
  <main>
    <h1>Heading</h1>
    <div>
      <h2>test1</h2>
      <p>test2 <em>emphasis</em></p>
    </div>
  </main>
";

const dom2 = document.createElement('main');
dom2.innerHTML = "
  <article>
    <h1>Heading2</h1>
    <section>
      <img src='img.png' alt='image' />
      <h3>test5 <strong>strong</strong></h3>
    </section>
  </article>
";

correspondingNode(dom1, dom2, dom1); // dom2
correspondingNode(dom1, dom2, dom1.querySelector('h2')); // <img src="img.png" alt="image" />
correspondingNode(dom1, dom2, dom1.querySelector('em')); // <strong>strong</strong>`;

export const solutionCode = `function correspondingNode (tree1, tree2, node1) {
  const path1 = getPath(tree1, node1);
  let currNode = tree2;

  for (let nodeIndex of path1) {
    currNode = currNode?.childNodes?.[nodeIndex];
  }

  return currNode;
}

function getPath (tree, node) {
  const path = [];
  let currNode = node;

  while (currNode.parentNode) {
    const parent = currNode.parentNode;
    path.unshift(getChildIndex(parent, currNode));
    currNode = parent;
  }

  return path;
}

function getChildIndex (parent, child) {
  const children = parent?.childNodes ?? [];
  return [...children].findIndex((node) => node === child);
}`;
