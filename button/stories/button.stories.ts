import Button from '~/button/src/Button.vue';

const variants = [
  'primary',
  'secondary',
  'accent',
  'neutral',
  'info',
  'success',
  'warning',
  'error',
];

export const base = () => ({
  components: { Button },
  template: variants
    .map((variant) => `<Button variant="${variant}">${variant}</Button>`)
    .join(''),
});

export const outline = () => ({
  components: { Button },
  template: variants
    .map(
      (variant) => `<Button variant="${variant}" outline>${variant}</Button>`
    )
    .join(''),
});
