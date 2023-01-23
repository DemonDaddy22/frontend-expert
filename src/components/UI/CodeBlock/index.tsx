import React, { useCallback, useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { copyTextToClipboard, isEmptyString } from '../../../utils';
import ClipBoard from '../../Icons/Clipboard';
import ClipBoardChecked from '../../Icons/ClipboardChecked';
import { ButtonWhite } from '../Button';
import IconButton from '../IconButton';
import classes from './styles.module.scss';

const CodeBlock: React.FC<CodeBlockProps> = (props) => {
  const {
    codeString,
    showLineNumbers = true,
    language = 'javascript',
    canCopy = true,
    hideCode = false,
    className = '',
    containerClassName = '',
    style = monokai,
    ...restProps
  } = props;

  const [isCopied, setIsCopied] = useState(false);
  const [isCodeHidden, setIsCodeHidden] = useState(hideCode);

  const handleCopyClick = useCallback(() => {
    setIsCopied(true);
    copyTextToClipboard(codeString);
    setTimeout(() => setIsCopied(false), 2500);
  }, [codeString]);

  const handleRevealCode = useCallback(() => {
    setIsCodeHidden(false);
  }, []);

  useEffect(() => {
    setIsCodeHidden(hideCode);
  }, [hideCode]);

  return !isEmptyString(codeString) ? (
    <section className={`${classes.wrapper} ${containerClassName}`}>
      <SyntaxHighlighter
        language={language}
        style={style}
        showLineNumbers={showLineNumbers}
        className={`${classes.codeBlock} ${className} ${isCodeHidden ? classes.blurredOverlay : ''}`}
        {...restProps}
      >
        {codeString}
      </SyntaxHighlighter>
      {!isCodeHidden && canCopy ? (
        <IconButton onClick={handleCopyClick} className={classes.iconButton}>
          {isCopied ? <ClipBoardChecked /> : <ClipBoard />}
        </IconButton>
      ) : null}
      {isCodeHidden ? (
        <ButtonWhite onClick={handleRevealCode} className={classes.revealCodeButton}>
          Show Solution
        </ButtonWhite>
      ) : null}
    </section>
  ) : null;
};

export default CodeBlock;
