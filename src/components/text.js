(() => ({
  name: 'Text',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { content } = options;
    return (
      <p className={classes.paragraph}>
        {content.length > 0 ? content : 'paragraph'}
      </p>
    );
  })(),
  styles: () => () => ({
    paragraph: {
      color: 'red',
    },
  }),
}))();
