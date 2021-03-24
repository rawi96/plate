import { ClassName } from '@udecode/slate-plugins-ui-fluent';
import { MediaEmbedElementStyleSet } from './MediaEmbedElement.types';

export const getMediaEmbedElementStyles = ({
  className,
}: ClassName): MediaEmbedElementStyleSet => {
  return {
    root: [
      {
        // Insert css properties
        position: 'relative',
      },
      className,
    ],
    iframeWrapper: {
      padding: '75% 0 0 0',
      position: 'relative',
    },
    iframe: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
    },
    input: {
      fontSize: '0.85em',
      width: '100%',
      padding: '0.5em',
      border: '2px solid #ddd',
      background: '#fafafa',
      marginTop: '5px',
    },
  };
};
