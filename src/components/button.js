(() => ({
  name: 'Button',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'VERTICAL',
  styleType: 'BUTTON',
  jsx: (() => {
    const { buttonText } = options;

    return (
      <button className={classes.root} type="button">
        {buttonText}
      </button>
    );
  })(),
  styles: () => ({ styles }) => ({
    root: {
      color: ({ styleId }) =>
        (styles && styles[styleId] && styles[styleId].color) || 'red',
      backgroundColor: ({ styleId }) =>
        (styles && styles[styleId] && styles[styleId].backgroundColor) ||
        'black',
    },
  }),
}))();
