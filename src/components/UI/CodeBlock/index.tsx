import React, { useCallback, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { copyTextToClipboard } from '../../../utils';
import ClipBoard from '../../Icons/Clipboard';
import ClipBoardChecked from '../../Icons/ClipboardChecked';
import IconButton from '../IconButton';
import classes from './styles.module.scss';

const CodeBlock: React.FC<CodeBlockProps> = (props) => {
  const {
    codeString,
    showLineNumbers = true,
    language = 'javascript',
    className = '',
    containerClassName = '',
    style = monokai,
    ...restProps
  } = props;

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = useCallback(() => {
    setIsCopied(true);
    copyTextToClipboard(codeString);
    setTimeout(() => setIsCopied(false), 2500);
  }, [codeString]);

  return (
    <section className={`${classes.wrapper} ${containerClassName}`}>
      <SyntaxHighlighter
        language={language}
        style={style}
        showLineNumbers={showLineNumbers}
        className={`${classes.codeBlock} ${className}`}
        {...restProps}
      >
        {codeString}
      </SyntaxHighlighter>
      <IconButton onClick={handleCopyClick} className={classes.iconButton}>
        {isCopied ? <ClipBoardChecked /> : <ClipBoard />}
      </IconButton>
    </section>
  );
};

export default CodeBlock;
