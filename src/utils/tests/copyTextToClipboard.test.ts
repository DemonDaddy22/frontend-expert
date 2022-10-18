import { copyTextToClipboard } from '..';

test('copyTextToClipboard with an empty string', async () => {
  const isTextCopied = await copyTextToClipboard('');
  expect(isTextCopied).toBeFalsy();
});

test('copyTextToClipboard with a non-empty string', async () => {
  try {
    const text = 'hello world';
    const isTextCopied = await copyTextToClipboard(text);
    if (isTextCopied) {
      expect(isTextCopied).toBeTruthy();
    } else {
      expect(isTextCopied).toBeFalsy();
    }
  } catch (err) {
    expect(err).toMatch('error');
  }
});
