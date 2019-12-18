import React from 'react';
import { Plugin, RenderLeafProps } from 'slate-react';
import { onKeyDownMark } from '../onKeyDownMark';

export const renderLeafInlineCode = ({ children, leaf }: RenderLeafProps) => {
  if (leaf.code) children = <code>{children}</code>;

  return children;
};

export const InlineCodePlugin = (): Plugin => ({
  renderLeaf: renderLeafInlineCode,
  onKeyDown: onKeyDownMark({ type: 'code', hotkey: 'mod+`' }),
});
