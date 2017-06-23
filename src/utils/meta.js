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

export const addTag = (tag: MetaDefinition, forceCreation?: boolean = false): HTMLMetaElement => {
  console.log(tag, forceCreation);
};
