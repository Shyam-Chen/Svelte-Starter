interface MetaDefinition {
  charset?: string;
  content?: string;
  httpEquiv?: string;
  id?: string;
  itemprop?: string;
  name?: string;
  property?: string;
  scheme?: string;
  url?: string;
}

/**
 * @example
 * addTag({ name: 'description', content: 'This is my great description.' });
 */

export const addTag = (tag: MetaDefinition): void => {
  const meta: HTMLMetaElement = document.createElement('meta');
  const node: Node<MetaDefinition> = Object.assign(meta, { ...tag });

  document.querySelectorAll('head')[0].appendChild(node);
};

export const addTags = (tags: MetaDefinition[], forceCreation?: boolean = false): HTMLMetaElement[] => {
  console.log(tags, forceCreation);
};

export const getTag = (attrSelector: string): HTMLMetaElement | null => {
  console.log(attrSelector);
};

export const getTags = (attrSelector: string): HTMLMetaElement[] => {
  console.log(attrSelector);
};

export const updateTag = (tag: MetaDefinition, selector?: string): HTMLMetaElement | null => {
  console.log(tag, selector);
};

export const removeTag = (attrSelector: string): void => {
  console.log(attrSelector);
};

export const removeTagElement = (meta: HTMLMetaElement): void => {
  console.log(meta);
};
