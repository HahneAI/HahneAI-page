// Utility to prefetch images
export function prefetchImage(src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });
}

// Utility to prefetch multiple images
export async function prefetchImages(srcs: string[]) {
  return Promise.all(srcs.map(prefetchImage));
}

// Utility to prefetch a component
export function prefetchComponent(getComponent: () => Promise<unknown>) {
  return getComponent();
}