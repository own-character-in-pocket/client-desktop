import { kebabCase } from 'lodash';

type Key = number | string;

const createCssVariable = (...keys: readonly Key[]) => `var(--${kebabCase(keys.join('-'))})`;

const createCssVariables = <K extends Key>(prefix: string, keys: readonly K[]) =>
  keys.reduce((record, key) => {
    record[key] = createCssVariable(prefix, key);
    return record;
  }, {} as Record<K, string>);

const ZERO_TO_NINE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export const Radius = createCssVariables('size-radius', [0, 1, 2, 3, 4, 5, 6, 7, 8, 'Zero', 'Light', 'Normal', 'Bold']);

export const Size = createCssVariables('size', ['BorderThickness', 'BoxShadowThickness']);

const createSwatchCssVariables = <K extends Key>(color: string, keys: readonly K[]) => createCssVariables(`swatch-${color}`, keys);

export const Swatch = {
  Transparent: createCssVariable('swatch-transparent'),
  White: createCssVariable('swatch-white'),
  Black: createCssVariable('swatch-black'),
  Gray: createSwatchCssVariables('gray', ZERO_TO_NINE),
  Red: createSwatchCssVariables('red', ZERO_TO_NINE),
  Pink: createSwatchCssVariables('pink', ZERO_TO_NINE),
  Grape: createSwatchCssVariables('grape', ZERO_TO_NINE),
  Violet: createSwatchCssVariables('violet', ZERO_TO_NINE),
  Indigo: createSwatchCssVariables('indigo', ZERO_TO_NINE),
  Blue: createSwatchCssVariables('blue', ZERO_TO_NINE),
  Cyan: createSwatchCssVariables('cyan', ZERO_TO_NINE),
  Teal: createSwatchCssVariables('teal', ZERO_TO_NINE),
  Green: createSwatchCssVariables('green', ZERO_TO_NINE),
  Lime: createSwatchCssVariables('lime', ZERO_TO_NINE),
  Yellow: createSwatchCssVariables('yellow', ZERO_TO_NINE),
  Orange: createSwatchCssVariables('orange', ZERO_TO_NINE)
};

export const Color = createCssVariables('color', [
  'White',
  'Pink',
  'Red',
  'Blue',
  'Orange',
  'Black',

  'Font',

  'BorderNormal',
  'BorderHover',

  'BoxShadowNormal',
  'BoxShadowHover',

  'BackgroundRoot',
  'BackgroundNormal',
  'BackgroundHover',
  'BackgroundThumbnail',
  'BackgroundSidebar'
]);
