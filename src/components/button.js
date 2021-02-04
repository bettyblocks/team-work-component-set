(() => ({
  name: 'Button',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { buttonText } = options;

    return (
      <button className={classes.root} type="button">
        {buttonText}
      </button>
    );
  })(),
  styles: () => () => ({
    root: {
      color: 'red',
    },
  }),
}))();
