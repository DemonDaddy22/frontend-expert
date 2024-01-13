import React, { useCallback, useEffect, useState } from 'react';
import SyntaxHighlighter, { type SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { motion } from 'framer-motion';
import { copyTextToClipboard, isEmptyString } from '../../../utils';
import ClipBoard from '../../Icons/Clipboard';
import ClipBoardChecked from '../../Icons/ClipboardChecked';
import { ButtonWhite } from '../Button';
import IconButton from '../IconButton';
import classes from './styles.module.scss';
import { COLORS } from '../../../constants/theme';
import { CONTENT_VARIANTS } from '../../../constants';

interface Props extends CodeBlockProps, Partial<SyntaxHighlighterProps> {}

const CodeBlock: React.FC<Props> = (props) => {
  const {
    codeString,
    showLineNumbers = true,
    language = 'javascript',
    canCopy = true,
    hideCode = false,
    className = '',
    containerClassName = '',
    style = atomOneDarkReasonable,
    ...restProps
  } = props;

  const [isCopied, setIsCopied] = useState(false);
  const [isCodeHidden, setIsCodeHidden] = useState(hideCode);

  const handleCopyClick = useCallback(async () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
    try {
      await copyTextToClipboard(codeString);
    } catch (err) {
      // Ignore for now
    }
  }, [codeString]);

  const handleRevealCode = useCallback(() => {
    setIsCodeHidden(false);
  }, []);

  useEffect(() => {
    setIsCodeHidden(hideCode);
  }, [hideCode]);

  return !isEmptyString(codeString) ? (
    <motion.section variants={CONTENT_VARIANTS} className={`${classes.wrapper} ${containerClassName}`}>
      <SyntaxHighlighter
        language={language}
        style={style}
        showLineNumbers={showLineNumbers}
        className={`${classes.codeBlock} ${className} ${isCodeHidden ? classes.blurredOverlay : ''}`}
        lineNumberStyle={{ color: COLORS.WHITE_WITH_OPACITY_40 }}
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
    </motion.section>
  ) : null;
};

export default CodeBlock;
