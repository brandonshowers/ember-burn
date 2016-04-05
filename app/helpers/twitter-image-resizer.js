import Ember from 'ember';

export function twitterImageResizer(width, height) {
  let adjustedHeight;
  let adjustedWidth;

  const ASPECT_RATIO = width / height;
  const MAX_HEIGHT = 1200;
  const MAX_WIDTH = 600;

  if (!width || !height) {
    throw new Error('Twitter Image Resizer: height and width required');
  }

  if (width <= MAX_WIDTH && height <= MAX_HEIGHT) {
    return {
      adjustedWidth: width,
      adjustedHeight: height,
    };
  }

  if (ASPECT_RATIO >= 1.5) {
    adjustedHeight = MAX_WIDTH / ASPECT_RATIO;
    adjustedWidth = Math.round(adjustedHeight) * ASPECT_RATIO;

    if (adjustedWidth > MAX_WIDTH) {
      adjustedWidth = MAX_WIDTH;
    }
  } else if (ASPECT_RATIO > 1) {
    adjustedHeight = MAX_WIDTH / ASPECT_RATIO;
    adjustedWidth = adjustedHeight * ASPECT_RATIO;
  } else if (ASPECT_RATIO <= 1 && ASPECT_RATIO > 0.5) {
    adjustedWidth = MAX_WIDTH;
    adjustedHeight = adjustedWidth / ASPECT_RATIO;
  } else if (ASPECT_RATIO <= 0.5) {
    adjustedWidth = MAX_HEIGHT * ASPECT_RATIO;
    adjustedHeight = Math.round(adjustedWidth) / ASPECT_RATIO;

    if (adjustedHeight > MAX_HEIGHT) {
      adjustedHeight = MAX_HEIGHT;
    }
  }


  return {
    adjustedWidth: Math.round(adjustedWidth),
    adjustedHeight: Math.round(adjustedHeight)
  };
}

export default Ember.Helper.helper(twitterImageResizer);
