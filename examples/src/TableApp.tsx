import React from 'react';
import {
  createExitBreakPlugin,
  createSoftBreakPlugin,
  createTablePlugin,
  Plate,
} from '@udecode/plate';
import { basicNodesPlugins } from './basic-nodes/basicNodesPlugins';
import { editableProps } from './common/editableProps';
import { plateUI } from './common/plateUI';
import { exitBreakPlugin } from './exit-break/exitBreakPlugin';
import { softBreakPlugin } from './soft-break/softBreakPlugin';
import { TableToolbarButtons } from './table/TableToolbarButtons';
import { tableValue } from './table/tableValue';
import { Toolbar } from './toolbar/Toolbar';
import { createMyPlugins, MyValue } from './typescript/plateTypes';

const plugins = createMyPlugins(
  [
    ...basicNodesPlugins,
    createSoftBreakPlugin(softBreakPlugin),
    createExitBreakPlugin(exitBreakPlugin),
    createTablePlugin(),
  ],
  {
    components: plateUI,
  }
);

export default () => (
  <>
    <Toolbar>
      <TableToolbarButtons />
    </Toolbar>

    <Plate<MyValue>
      editableProps={editableProps}
      plugins={plugins}
      initialValue={tableValue}
    />
  </>
);
