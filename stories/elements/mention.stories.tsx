import React from 'react';
import {
  ELEMENT_MENTION,
  getComponent,
  getSlatePluginsComponents,
  getSlatePluginsOptions,
  MentionElement,
  MentionSelect,
  SlatePlugin,
  SlatePlugins,
  useBasicElementPlugins,
  useHistoryPlugin,
  useMentionPlugin,
  useReactPlugin,
} from '@udecode/slate-plugins';
import { initialValueMentions } from '../config/initialValues';
import { editableProps, optionsMentionPlugin } from '../config/pluginOptions';
import { renderMentionLabel } from '../config/renderMentionLabel';

const id = 'Elements/Mention';

export default {
  title: id,
};

const components = getSlatePluginsComponents({
  [ELEMENT_MENTION]: getComponent(MentionElement, {
    renderLabel: renderMentionLabel,
  }),
});
const options = getSlatePluginsOptions();

export const Example = () => {
  const { getMentionSelectProps, ...mentionPlugin } = useMentionPlugin(
    optionsMentionPlugin
  );

  const plugins: SlatePlugin[] = [
    useReactPlugin(),
    useHistoryPlugin(),
    ...useBasicElementPlugins(),
    mentionPlugin,
  ];

  return (
    <SlatePlugins
      id={id}
      plugins={plugins}
      components={components}
      options={options}
      editableProps={editableProps}
      initialValue={initialValueMentions}
    >
      <MentionSelect
        {...getMentionSelectProps()}
        renderLabel={renderMentionLabel}
      />
    </SlatePlugins>
  );
};
